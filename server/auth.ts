import { ID } from "node-appwrite";
import { z } from "zod";

const express = require("express");
const router = express.Router();
const sdk = require("node-appwrite");
router.use(express.json());

// Init SDK
const client = new sdk.Client();

const users = new sdk.Users(client);

const account = new sdk.Account(client);

client
  .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
  .setProject("65f1330d269046c12752") // Your project ID
  .setKey(
    "5e11894d5faac6e411f92d12ea21cedf9d36f726c1f95e7793ba3fdd8e591fc6a1a495ca5627d2eacbeedf1142b36ccd125271e1de42ebe19c9d32bdb66d962e035f7127c9ab9c57967ccf5c0e440a6e020f5f8649629ae2f91cd0f2894d3e39624a8189e7150108e7a1a512a7e5de5b1861023e0ad81667546771804e7a4484"
  ); // Your secret API key

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
    const promise = account.createVerification("http://localhost:3000");

    promise.then(
      function (response: any) {
        console.log(response);
      },
      function (error: any) {
        console.log(error);
      }
    );
    //     const promise = users.createBcryptUser(uuid, email, password);
    //     promise.then(
    //       function (response: any) {
    //         res.status(200).json(response);
    //       },
    //       function (error: any) {
    //         res.json(error);
    //       }
    //     );
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
