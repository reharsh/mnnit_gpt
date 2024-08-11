import {
  serviceContextFromDefaults,
  SimpleDirectoryReader,
  storageContextFromDefaults,
  VectorStoreIndex,
  TogetherEmbedding,
  OpenAIEmbedding,
  SentenceSplitter,
  Document,
  SimpleNodeParser,
} from "llamaindex";

import OpenAI from "openai";
import { Pinecone } from "@pinecone-database/pinecone";

import * as dotenv from "dotenv";

// This is suppose to be vector embeddings generate for the vector database but it is a mess rn,
// Instead use the provided colab file to upsert to pc or execute the similar implementation to this file.

import {
  CHUNK_OVERLAP,
  CHUNK_SIZE,
  STORAGE_CACHE_DIR,
  STORAGE_DIR,
} from "./constants.mjs";

// Load environment variables from local .env file
dotenv.config();

async function getRuntime(func) {
  const start = Date.now();
  await func();
  const end = Date.now();
  return end - start;
}

async function generateDatasource(serviceContext) {
  console.log(`Generating storage context...`);
  // Split documents, create embeddings and store them in the storage context
  const ms = await getRuntime(async () => {
    const storageContext = await storageContextFromDefaults({
      persistDir: STORAGE_CACHE_DIR,
    });
    const documents = await new SimpleDirectoryReader().loadData({
      directoryPath: STORAGE_DIR,
    });
    await VectorStoreIndex.fromDocuments(documents, {
      storageContext,
      serviceContext,
    });
  });
  console.log(`Storage context successfully generated in ${ms / 1000}s.`);
}

(async () => {
  const serviceContext = serviceContextFromDefaults({
    chunkSize: CHUNK_SIZE,
    chunkOverlap: CHUNK_OVERLAP,
    embedModel: new OpenAIEmbedding(),
  });

  await generateDatasource(serviceContext);

  console.log("Finished generating storage.");
})();
