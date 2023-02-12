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
    if (err) {
      console.log("error in signup");
      return res.json({ status: "error", error: "error in signup" });
    }
    res.json(users);
  });
};

const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          phone: req.body.phone,
          address: req.body.address,
          about: req.body.about,
        },
      },
      { new: true }
    );
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).send({ message: "User not found" });
    res.send({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).send({ message: "Failed to delete user" });
  }
};

module.exports = {
  signupPage,
  createUser,
  validateUser,
  allUsers,
  updateUser,
  deleteUser,
};
