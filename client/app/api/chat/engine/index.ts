import {
  ChatMessage,
  ContextChatEngine,
  LLM,
  OpenAIEmbedding,
  PineconeVectorStore,
  serviceContextFromDefaults,
  SimpleDocumentStore,
  storageContextFromDefaults,
  TogetherEmbedding,
  VectorStoreIndex,
} from "llamaindex";
import { CHUNK_OVERLAP, CHUNK_SIZE, STORAGE_CACHE_DIR } from "./constants.mjs";

async function getDataSource(llm: LLM) {
  const serviceContext = serviceContextFromDefaults({
    llm,
    chunkSize: CHUNK_SIZE,
    chunkOverlap: CHUNK_OVERLAP,
    embedModel: new OpenAIEmbedding({ model: "text-embedding-ada-002" }), // Enhanced Embedding Model
  });

  const storageContext = await storageContextFromDefaults({
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
    embedModel: new OpenAIEmbedding({ model: "text-embedding-ada-002" }), // Enhanced Embedding Model
  });

  const pcvs = new PineconeVectorStore({
    indexName: "moti-mnnit", // Name of your pc index
  });

  // Hybrid Retrieval Approach
  const index = await VectorStoreIndex.fromVectorStore(pcvs, serviceContext);
  const retriever = index.asRetriever();
  retriever.similarityTopK = 5; // Increase TopK for broader retrieval

  return new ContextChatEngine({
    chatModel: llm,
    retriever,
    contextSystemPrompt: ({
      context,
    }) => `You are a helpful assistant for MNNIT Allahabad, a prestigious engineering university in Prayagraj, India.
    
    Guidelines:
    - Strictly avoid NSFW, explicit, or adult content. If such topics are brought up, politely refuse to engage and redirect to appropriate academic resources.
    - Maintain a professional, academic tone in your responses, ensuring thorough and complete information is provided.
    - When relevant, leverage your knowledge of MNNIT's academic programs, research, and student life.
    - Don't show user that you don't have enough information so they have to visit MNNIT website
    - If you don't have enough information or context you can ask again for more information about query

    Additional Context: ${context || "No additional context provided."}`,
  });
}
