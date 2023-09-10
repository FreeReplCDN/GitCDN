import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";
import { getUserInfo } from "@replit/repl-auth";
import { listFiles, createRepo } from "./git.mjs";
import { sql } from "./sql.mjs";
import * as fs from "fs";
import { auth } from "./auth.mjs";

// Have to do this cause ES6 and stuff
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Write uptime log file
setInterval(() => {
  let time = "\n" + new Date().toLocaleString("en-US");
  fs.appendFile("other/pinger.log", time, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(time);
      console.log("File written successfully\n");
      //console.log("The written has the following contents:");
      //console.log(fs.readFileSync("books.txt", "utf8"));
    }
  });
}, 120000);

const app = express();

app.use(cookieParser());
app.use(express.static(path.join(__dirname, "/public/")));

// Homepage
app.get("/", async (req, res) => {
  const user = getUserInfo(req);
  res.sendFile(path.join(__dirname, "/views/index.html"));
});

// Login page
app.get("/login", async (req, res) => {
  const user = getUserInfo(req);
  if (!user) {
    res.sendFile(path.join(__dirname, "/views/login.html"));
  } else {
    res.redirect("/dashboard");
  }

  /* Implementing repl Auth */
  /* reinventing auth */
});

// View your files
app.get("/dashboard", async (req, res) => {
  const user = getUserInfo(req);
  //don't use replit auth for all endpoints, but instead use a session cookie? maybe because of github auth standardization. Yes, you're right
  /* If user logged in we go to the dashboard. */
  if (user) {
    /* TODO view in DB if user is already registered. */
    res.sendFile(path.join(__dirname, "/views/dashboard.html"));
  } else {
    res.redirect("/login#error");
  }
});

// Returns `pong` for UptimeRobot
app.get("/ping", async (req, res) => {
  let time = new Date().toLocaleString("en-US");
  fs.appendFile("other/pinger.log", "\nPING RECV: " + time, (err) => {
    if (err) console.log(err);
    else {
      console.log(time);
      console.log("File written successfully for net request to ping\n");
      //console.log("The written has the following contents:");
      //console.log(fs.readFileSync("books.txt", "utf8"));
    }
  });
  res.send("pong");
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
  res.cookie('REPL_AUTH', '-1', {
    maxAge: 0, // 1 year
    //httpOnly: true, // prevents the cookie from being accessed by JavaScript
    //secure: true // only sent over HTTPS
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
