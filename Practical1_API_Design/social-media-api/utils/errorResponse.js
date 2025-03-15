class ErrorResponse extends Error {
    constructor (message, statusCode) {
    super (message);
    this.statusCode = statusCode;
    }
    0
    }
    module.exports = ErrorResponse;