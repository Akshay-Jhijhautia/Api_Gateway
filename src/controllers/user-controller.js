const { StatusCodes } = require("http-status-codes");

const { UserService } = require("../services");
const { ErrorResponse, SuccessResponse } = require("../utils/common");

async function signUp(req, res) {
  try {
    const user = await UserService.create({
      email: req.body.email,
      password: req.body.password,
    });
    SuccessResponse.data = user;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function signIn(req, res) {
  try {
    const user = await UserService.signin({
      email: req.body.email,
      password: req.body.password,
    });
    SuccessResponse.data = user;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function addRoleToUser(req, res) {
  try {
    const user = await UserService.addRoleToUser({
      role: req.body.role,
      id: req.body.id,
    });
    SuccessResponse.data = user;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

module.exports = {
  signUp,
  signIn,
  addRoleToUser,
};
