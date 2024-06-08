import { Octokit } from "octokit";
const { GH_TOKEN } = process.env;

// Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({ auth: GH_TOKEN });

console.log("SOF");

// Base tree SHA for repository
async function _getTreeSHA(owner, repo, branch = "master") {
  let response;
  response = await octokit.request(
    "GET /repos/{owner}/{repo}/branches/{branch}",
    {
      owner: owner,
      repo: repo,
      branch: branch,
    }
  );
  return response.data.commit.commit.tree.sha;
}

// Internal method for writing files NOTNEEDED
async function _writeFile(owner, repo, file, content, sha = null) {
  let response;
  response = await octokit.request(
    "PUT /repos/{owner}/{repo}/contents/{path}",
    {
      owner: owner,
      repo: repo,
      path: file,
      message: "File Update",
      committer: {
        name: "FreeReplCDN Automated Tasks",
        email: "93660666+py660@users.noreply.github.com",
      },
      content: btoa(content),
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
      sha: sha,
    }
  );
  console.log(response);
}

// PUBLIC METHODS

// List files under a tree SHA

//Explanation : when you input for example
/*
"clement070110" as owner
"darky" as repo
"public" as path
It will give
[
  true, //If the path exists
  [ // all files
    'collide.js', 'icon.jpeg',
    'index.js' ect...
  ]
]

*/
async function listFiles(owner, repo, path, full = false) {
  let response;
  let treesha = await _getTreeSHA(owner, repo, "master");
  response = await octokit.request(
    "GET /repos/{owner}/{repo}/git/trees/{tree_sha}",
    {
      owner: owner,
      repo: repo,
      tree_sha: treesha,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
      recursive: true,
    }
  );
  if (full) return response.data.tree;
  //console.log(path)
  if (path.slice(-1) === "/") {
    path = path.slice(0, -1);
  }
  let tree = response.data.tree;
  //console.log(path);
  let out = tree.filter((file) => file.path.startsWith(path ? path + "/" : ""));
  let splicedPath = path.split("/");
  if (out.length) {
    let results = [];
    Object.entries(out).forEach(([key, value]) => {
      //If the path isn't /
      if (splicedPath != "") {
        let thisPath = out[key].path.split("/");
        for (let i = 0; i < out[key].path.length; i++) {
          if (splicedPath[splicedPath.length - 1] === thisPath[i]) {
            if (thisPath.length - 1 > i) {
              //We verify that it isn't already in the results.
              if (!results.includes(thisPath[i + 1])) {
                results.push(thisPath[i + 1]);
              }
            }
          }
        }
      } else {
        //If the path is "/"
        let thisPath = out[key].path.split("/");
        if (thisPath != "") {
          if (!results.includes(thisPath[0])) {
            results.push(thisPath[0]);
          }
        } else {
          if (!results.includes(out[key].path)) {
            results.push(out[key].path);
          }
        }
      }
    });
    return [true, results];
  }
  return [false, 404];
}

// Get the target file for production use via githack
// Returns: Array[bool, Object[type: str, text: str]]
async function getFile(owner, repo, path) {
  const response = await fetch(
    `https://raw.githubusercontent.com/${owner}/${repo}/master/${path}`
  );
  //console.log(response.headers.get("content-type"));
  if (response.status == 200) {
    //console.log(await response.text());
    return [
      true,
      {
        type: response.headers.get("content-type"),
        text: await response.text(),
      },
    ];
  }
  return [false, response.status];
}

async function createRepo(owner, repo) {
  let response;
  response = await octokit.request('POST /orgs/{org}/repos', {
    org: owner,
    name: repo,
    description: 'This is <ins>not</ins> your first repository',
    homepage: 'https://github.com',
    'private': true,//private?
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  });
  console.log(response);
}

// Create repo
//await createRepo("FreeReplCDN", "testRepo2");

// Create file
// await _writeFile("FreeReplCDN", "testRepo", "new.txt", "can you see this?")
// let rootTreeSHA = await _getTreeSHA("py660", "PyChat", "master");
// console.log(rootTreeSHA);

// List files
// let files = await listFiles("py660", "PyChat", "py/");
// console.log(files)

// Get file
// let response = await getFile("py660", "PyChat", "py/login.py");
// console.log(response);

console.log("EOF");
// beware of ratelimits
export { listFiles, getFile, createRepo };
