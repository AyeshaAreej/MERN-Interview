const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET =
  "sdjkfh8923yhjdksbfma@#*(&@*!^#&@bhjb2qiuhesdbhjdsfg839ujkdhfjksss";
const Stripe = require("stripe")(process.env.SECRET_KEY);
require("dotenv").config();

const signupPage = (req, res) => {
  return res.render("signupPage");
};

// JWT authentication
const createUser = async (req, res) => {
  const { password: orignalPassword } = req.body;

  if (orignalPassword.length < 5) {
    return res.json({
      status: "error",
      error: "Password should be atleast 5 characters",
    });
  }

  const password = await bcrypt.hash(orignalPassword, 10);

  await User.create(
    {
      email: req.body.email,
      username: req.body.username,
      password: password,
    },
    (err, user) => {
      if (err) {
        console.log("error in signup");
        return res.json({ status: "error", error: "error in signup" });
      }

      return res.json({ status: "ok", user });
    }
  );
};

//login

const validateUser = async (req, res) => {
  const { username, password } = req.body;
  console.log(username);

  const user = await User.findOne({ username }).lean();

  if (!user) {
    return res.json({ status: "error", error: "Invalid username or password" });
  }

  if (await bcrypt.compare(password, user.password)) {
    // the username, password combination is successful

    const token = await jwt.sign(
      {
        id: user._id,
      },
      JWT_SECRET
    );
    return res.json({ status: "ok", token, user });
  }

  return res.json({ status: "error", error: "Invalid username/password" });
};

const allUsers = async (req, res) => {
  console.log(req.body);
  User.find({}, (err, users) => {
    if (err) return res.send(err);
    res.json(users);
  });
};

module.exports = { signupPage, createUser, validateUser, allUsers };
