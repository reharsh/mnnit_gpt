const express = require("express");
const router = express.Router();
const sdk = require("node-appwrite");
router.use(express.json());
require("dotenv").config();
import { query, response } from "express";
import { chain } from "./utils/chain.js";

//@ts-ignore
router.post("/chat", async (request, response) => {
  console.log("Server working");
  const body = await request.json();
  const question = body.query;
  const history = body.history ?? [];
  console.log(question);

  const res = await chain._call({
    question: question,
    chat_history: history.map((h) => h.content).join("\n"),
  });

  console.log(res.sourceDocuments);

  const links = Array.from(
    new Set(res.sourceDocuments.map((document) => document.metadata.source))
  );
  response.json({ role: "assistant", content: res.text, links: links });
});

module.exports = router;
