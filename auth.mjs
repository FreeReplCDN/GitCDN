import * as crypto from "crypto";

function generateToken(uname, exp){
  let token;
  crypto.randomBytes(128, function(err, buffer) {
    token = buffer.toString('hex');
  });
  if (token){
    tokens[token] = {uname: uname, exp: exp}
  }
}
let tokens = {};
let auth = {};
export { auth };