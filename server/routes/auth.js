require("dotenv");
const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const joi = require("joi");
const jwt = require("jsonwebtoken");

// Register
router.post("/register", async (req, res, next) => {
  const schema = joi.object({
    username: joi.string().min(6).max(14).required(),
    email: joi.string().min(6).max(200).required(),
    firstname: joi.string().min(1).max(20).required(),
    lastname: joi.string().min(1).max(20).required(),
    password: joi.string().min(6).max(200).required(),
  });
  // Extract the validation errors from a request.
  const { error } = schema.validate(req.body);
  if (!error) {
    try {
      // check if username is  already in use
      const isUserInDB = await User.find({ username: req.body.username });
      if (isUserInDB.length > 0) {
        return res.status(500).json("Username already in use");
      }
      // check if email is  already in use
      const isEmailInDB = await User.find({ email: req.body.email });
      if (isEmailInDB.length > 0) {
        return res.status(500).json("email already in use");
      }
      // hash password for db
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      // create new user
      const newUser = await new User({
        email: req.body.email,
        username: req.body.username,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: hashedPassword,
      });
      // save user and return response
      try {
        const user = await newUser.save();

        // jwt token
        const secretKey = process.env.SECRET_KEY;
        const token = jwt.sign(
          {
            _id: user._id,
            username: user.username,
            email: user.email,
            firstname: user.firstname,
            lastname: user.lastname,
            theme: user.theme,
          },
          secretKey
        );

        res.status(200).json(token);
      } catch (err) {
        res.status(500).json(err);
      }
    } catch (err) {
      return next(err);
    }
  } else {
    res.status(500).send(error.details[0].message);
  }
});

// Login
router.post("/login", async (req, res) => {
  const schema = joi.object({
    usermail: joi.string().min(6).max(200).required(),
    password: joi.string().min(6).max(200).required(),
  });
  // Extract the validation errors from a request.
  const { error } = schema.validate(req.body);

  if (!error) {
    try {
      // check if user used email or username to login
      const email = await User.findOne({ email: req.body.usermail }).collation({
        locale: "en",
        strength: 2,
      });
      const username = await User.findOne({
        username: req.body.usermail,
      }).collation({ locale: "en", strength: 2 });
      let user = "";
      // set the user variable to either the email or username found
      if (email) {
        user = email;
      }
      if (username) {
        user = username;
      }
      // send error if no valid user is found
      !user && res.status(404).json("user not found");
      // check password
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      // send error if password is incorrect
      if (!validPassword) {
        return res.status(400).json("wrong password");
      }

      // jwt token
      const secretKey = process.env.SECRET_KEY;
      const token = jwt.sign(
        {
          _id: user._id,
          username: user.username,
          email: user.email,
          firstname: user.firstname,
          lastname: user.lastname,
          theme: user.theme,
        },
        secretKey
      );

      return res.status(200).json(token);
    } catch (err) {
      // return res.status(500).json(err);
    }
  } else {
    return res.status(500).send(error.details[0].message);
  }
});

module.exports = router;
