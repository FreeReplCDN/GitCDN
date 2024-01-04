import * as crypto from "crypto";

let tokens = [];

// SQL table-like interface
function get(key, value){
  let ret = [];
  for (let row of tokens){
    if (row[key] === value){
      ret.push(row);
    }
  }
  return ret;
}

function ins(col){
  tokens.push(row);
}

function set(criteria, requirement, key, value) {
  let acted = false;
  for (let row of tokens) {
    if (row[criteria] === requirement) {
      row[key] = value;
      acted = true;
    }
  }
  return acted;
}

function del(key, value){
  tokens = tokens.filter(row => row[key] !== value);
}

function exists(key, value){
  return tokens.some(row => row[key] === value);
}


/*function get(key, value){
  let ret = [];
  for (let row of tokens){
    if (row[key] == )
  }
}
function set(){}
function del(){}
function exists(){}*/

function generateAuth(username, expiration){
  let token;
  crypto.randomBytes(128, function(err, buffer) {
    token = buffer.toString('hex');
    if (token){
      set({username: username, token: token, exp: expiration})
    }
  });
}

function revokeAuth(token){
  delete tokens[token];
}

function revokeUserAuth(username){
  for (let e of tokens){
    if (e.username == "username"){
      console.log(e);
    }
  };
}

generateAuth("py660", new Date());
revokeUserAuth("py660");

export { generateAuth, revokeAuth, revokeUserAuth };