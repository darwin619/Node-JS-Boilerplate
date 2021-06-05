const httpStatus = require("http-status");

class HttpError extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
    Error.captureStackTrace(this, this.constructor);
  }
}

const handleError = (err, res) => {
  console.log('Error in execution => ', err);
  const statusCode = err.status || err.statusCode || err.response.status || httpStatus.BAD_REQUEST;
  const message = err.message || err.response.status || err.errorMessage || "Internal server error";
  res.status(statusCode).json({
    status: 'false',
    statusCode,
    message,
  });
};

module.exports = {
  HttpError,
  handleError,
};
