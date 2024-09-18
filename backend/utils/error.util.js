class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    console.log(this.constructor);

    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}

export const handleError = function (res, message, statusCode) {
  return res.status(statusCode).json({
    success: false,
    message: message,
  });
};

export default AppError;
