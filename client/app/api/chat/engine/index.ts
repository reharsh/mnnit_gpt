import {
  ContextChatEngine,
  LLM,
  PineconeVectorStore,
  serviceContextFromDefaults,
  SimpleDocumentStore,
  storageContextFromDefaults,
  TogetherEmbedding,
  VectorStoreIndex,
} from "llamaindex";
import { CHUNK_OVERLAP, CHUNK_SIZE, STORAGE_CACHE_DIR } from "./constants.mjs";
import { Pinecone } from "@pinecone-database/pinecone";

console.log(process.env.PINECONE_API_KEY);
const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY! });

async function getDataSource(llm: LLM) {
  const serviceContext = serviceContextFromDefaults({
    llm,
    chunkSize: CHUNK_SIZE,
    chunkOverlap: CHUNK_OVERLAP,
    embedModel: new TogetherEmbedding(),
  });
  let storageContext = await storageContextFromDefaults({
    persistDir: `${STORAGE_CACHE_DIR}`,
  });

  const numberOfDocs = Object.keys(
    (storageContext.docStore as SimpleDocumentStore).toDict()
  ).length;
  console.log(numberOfDocs);
  if (numberOfDocs === 0) {
    throw new Error(
      `StorageContext is empty - call 'npm run generate' to generate the storage first`
    );
  }
  return await VectorStoreIndex.init({
    storageContext,
    serviceContext,
  });
}

export async function createChatEngine(llm: LLM) {
  const serviceContext = serviceContextFromDefaults({
    llm,
    chunkSize: CHUNK_SIZE,
    chunkOverlap: CHUNK_OVERLAP,
  });

  const pcvs = new PineconeVectorStore({
    indexName: "canopy--document-uploader",
  });
  const index = await VectorStoreIndex.fromVectorStore(pcvs, serviceContext);
  const retriever = index.asRetriever();
  retriever.similarityTopK = 5;

  return new ContextChatEngine({
    chatModel: llm,
    retriever,
  });
}
