import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";
import { listFiles, createRepo } from "./git.mjs";
import { sql } from "./sql.mjs";
import * as fs from "fs";
import { generateAuth } from "./auth.mjs";

// Have to do this cause ES6 and stuff
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cookieParser());
app.use(express.static(path.join(__dirname, "/public/")));

// Homepage
app.get("/", async (req, res) => {
  res.sendFile(path.join(__dirname, "/views/index.html"));
});
app.get("/main2", async (req, res) => {
  res.sendFile(path.join(__dirname, "/views/index2.html"));
});
app.get("/template", async (req, res) => {
  res.sendFile(path.join(__dirname, "/views/template.html"));
});

// Login page
app.get("/login", async (req, res) => {
    res.sendFile(path.join(__dirname, "/views/login.html"));

  /* Implementing repl Auth */
  /* reinventing auth */
});

// View your files
app.get("/dashboard", async (req, res) => {
  //don't use replit auth for all endpoints, but instead use a session cookie? maybe because of github auth standardization. Yes, you're right
  /* If user logged in we go to the dashboard. */
    /* TODO view in DB if user is already registered. */
    res.sendFile(path.join(__dirname, "/views/dashboard.html"));
});


app.get("/services/oembed/", async (req, res) => {
  res.sendFile(path.join(__dirname, "other/oembed.json"));
});

// Returns the contents of other/pinger.log
app.get("/log", async (req, res) => {
  res.sendFile(path.join(__dirname, "other/pinger.log"));
});

app.get("/logout", async (req, res) => {
  console.log(req.headers, req.cookies, req.signedCookies);
  res.cookie('AUTH', '', {
    maxAge: -1,
    //httpOnly: true,
    //secure: true
  });
  res.send("<meta http-equiv='refresh' content='0;/'><p>If the page doesn't automatically redirect, click <a href='/'>here</a>.</p>");
})

// API (not UI?)Not UI
app.get('/api/listfiles', async (req, res) => {
  const user = getUserInfo(req);
  if (user) {
    //Send the user's data in json format.

    // i'll see, should the git repo be named after the user's username (should be chosen, but we'll use replit username for now [possible conflicts]),
    // or a random UUID-style identifier Random UUID.
    //okey, so I think the random UUID should be stored in the DB, we need to finish git api in git.mjs, and figure out sql in sql.mjs I guess, since it is required? Yeah
  }
});


//hi do you see the tutorial. I saw the tutorial annd video :(
app.listen(3000, () => {
  console.log("Server listening on port 3000\n");
});
