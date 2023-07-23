const http = require("http");

function getErrorDescription(httpErrorCode) {
  const errorDescription = http.STATUS_CODES[httpErrorCode];
  return errorDescription ? errorDescription : "Unknown Error";
}

export { getErrorDescription };

// Example usage
//const errorCode = 404; // Replace this with the desired HTTP error code
//const errorDescription = getErrorDescription(errorCode);
// console.log(`Error ${errorCode}: ${errorDescription}`);
