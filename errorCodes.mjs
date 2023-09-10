const http = require("http");

function getErrorDescription(httpErrorCode) {
  const errorDescription = http.STATUS_CODES[httpErrorCode];
  return errorDescription ? errorDescription : "Unknown Error";
}

export { getErrorDescription };