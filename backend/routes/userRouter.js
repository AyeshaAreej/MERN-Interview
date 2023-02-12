const express = require("express");
const userController = require("../controllers/userController");

const route = express.Router();

//authorization
// route.get('/',userController.signupPage)
route.post("/register", userController.createUser);
route.post("/loginn", userController.validateUser);
route.get("/allUsers", userController.allUsers);

module.exports = route;
