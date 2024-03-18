import fs from "node:fs/promises";

import { Document, VectorStoreIndex } from "llamaindex";

export async function indexing() {
  // Load essay from abramov.txt in Node
  const path = "";

  const essay = await fs.readFile("../bulk.txt", "utf-8");

  if (essay) {
    console.log(essay.length, essay[5]);
  }
  // Create Document object with essay
  const document = new Document({ text: essay, id_: path });

  // Split text and create embeddings. Store them in a VectorStoreIndex
  const index = await VectorStoreIndex.fromDocuments([document]);

  // Query the index
  const queryEngine = index.asQueryEngine();
  const response = await queryEngine.query({
    query: "what are instruments required for this",
  });

  // Output response
  console.log(response.toString());
}
