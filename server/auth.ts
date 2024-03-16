import { ID } from "node-appwrite";
import { z } from "zod";

const express = require("express");
const router = express.Router();
const sdk = require("node-appwrite");
router.use(express.json());
require("dotenv").config();

const client = new sdk.Client();

const users = new sdk.Users(client);

const account = new sdk.Account(client);

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.APPWRITE_PROJECT_ID)
  .setKey(process.env.APPWRITE_API_KEY);

const emailSchema = z
  .string()
  .min(1, { message: "This field has to be filled." })
  .email("This is not a valid email.")
  .refine((email) => email.endsWith("@mnnit.ac.in"), {
    message: "Please Enter Valid MNNIT Email",
  });

//@ts-ignore
router.get("/users", async (req, res) => {
  const usersList = await users.list();
  if (usersList) {
    res.status(200).json({ response: usersList });
  } else {
    res.status(404).json({ error: "Users List Not Found" });
  }
});

//@ts-ignore
router.post("/signup", async (req, res) => {
  const data = req.body;
  const emailObj = emailSchema.safeParse(data.email);
  if (!emailObj.success) {
    res.status(401).json(emailObj.error.format());
  } else {
    const password = data.password;
    const name = data.name;
    const email = emailObj.data;
    const uuid = ID.unique();
    // const promise = account.createVerification("http://localhost:3000");

    // promise.then(
    //   function (response: any) {
    //     console.log(response);
    //   },
    //   function (error: any) {
    //     console.log(error);
    //   }
    // );
    const user = await users.createBcryptUser(uuid, email, password);
    if (user) {
      console.log("user created!");
      res.status(200).json(user);
    } else {
      res.json({ error: "Error creating user." });
    }
  }
});

//@ts-ignore
router.post("/login", (req, res) => {
  const data = req.body;
  const password = data.password;
  const user_id = data.user_id;
  const email = data.email;
  const promise = users.get(user_id);
  promise.then(
    function (response: any) {
      if (response.password == password) {
        res.status(200).json(response);
      } else {
        res.status(404).json({ message: "Incorrect Password!!" });
      }
    },
    function (error: any) {
      res.json(error);
    }
  );
});

//@ts-ignore
router.get("/getaccount", (req, res) => {
  const promise = account.listIdentities();

  promise.then(
    function (response: any) {
      console.log(response);
    },
    function (error: any) {
      console.log(error);
    }
  );
});

module.exports = router;
