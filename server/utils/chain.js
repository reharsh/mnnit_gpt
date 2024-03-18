import { OpenAI } from "langchain/llms/openai";
import { Pinecone } from "@pinecone-database/pinecone";
import { PineconeStore } from "@langchain/pinecone";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { ConversationalRetrievalQAChain } from "langchain/chains";

async function initChain() {
  const model = new OpenAI({});

  const pinecone = new Pinecone();

  // Access your Pinecone index
  const pineconeIndex = pinecone.Index(process.env.PINECONE_INDEX);

  /* create vectorstore*/
  const vectorStore = await PineconeStore.fromExistingIndex(
    new OpenAIEmbeddings({}),
    {
      pineconeIndex: pineconeIndex,
      textKey: "text",
    }
  );

  return ConversationalRetrievalQAChain.fromLLM(
    model,
    vectorStore.asRetriever(),
    { returnSourceDocuments: true }
  );
}

export const chain = await initChain();
