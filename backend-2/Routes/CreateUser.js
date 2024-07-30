const express = require("express");
const router = express.Router();
const User = require("../models/User");
// ...rest of the initial code omitted for simplicity.
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs"); 
//below secretkey is made ,this is not known to the user
const jwtsecret = "mynameissonamkadam"; 
router.post(
  "/createuser",
  [
    // username must be an email
    body("email").isEmail(),
    //name must be at least 5 chars long
    body("name").isLength({ min: 5 }),
    // password must be at least 5 chars long
    body("password", "Incorrect Password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //these following two line are using bcrypt.js package to hash the password
    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password, salt);

    try {
      await User.create({
        name: req.body.name,
        password: secPassword,
        email: req.body.email,
        location: req.body.location,
      });
      res.json({ success: true });
    } catch {
      console.log("Error is occured");
      res.json({ success: false });
    }
  }
);

router.post(
  "/loginuser",
  [
    // username must be an email
    body("email").isEmail(),
    // password must be at least 5 chars long
    body("password", "Incorrect Password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let email = req.body.email;
    try {
      let userdata = await User.findOne({ email });
      if (!userdata) {
        return res
          .status(400)
          .json({ errors: "Try login with correct credentials" });
      }

      const pwdCompare = await bcrypt.compare(
        req.body.password,
        userdata.password
      );

      if (!pwdCompare) {
        return res
          .status(400)
          .json({ errors: "Try login with correct credentials" });
      }

      //here we are taking id from the mongodb database for the the sign
      const data = {
        user: {
          id: userdata.id,
        },
      };
      //  generate authorization token here
      //   jwt format is
      //   1.header=>taken fron sign itself
      //   2.payload=>data
      //   3.signature=>jwtsecret
      const authToken = jwt.sign(data, jwtsecret);
      //and here below along with the true we are passing authToken to the user
      return res.json({ success: true, authToken: authToken });
    } catch {
      console.log("Error is occured");
      res.json({ success: false });
    }
  }
);

module.exports = router;
