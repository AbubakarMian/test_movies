// const User = require("../models/user");
const express = require("express");
const router = express.Router();
const { user } = require("../models");
const { validationResult, body } = require("express-validator");
const dotenv = require("dotenv");

const jwt = require("jsonwebtoken");
const Cryptr = require("cryptr");
const bcrypt = require("bcryptjs");

dotenv.config();

// LOGIN API
router.post(
  "/login",
  // body("email").not().isEmpty().isEmail(),
  // body("password").not().isEmpty(),
  async (req, res, next) => {
    console.log("reqreq", {
      email: req.body.email,
      password: req.body.password,
    });

    const cryptr = new Cryptr("multivendor");
    const encryptedString = cryptr.encrypt(req.body.password);
    const decryptedString = cryptr.decrypt(encryptedString);

    console.log("reqreq encryptedString", encryptedString);
    console.log("reqreq decryptedString ", decryptedString);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }



    // api
    try {
      const user_obj = await user.findOne({ where: { email: req.body.email } });

      if (user_obj === null) {
        console.log("Not found!");
        return res.status(400).send({
          ResponseCode: "Fail",
          message: "invalid user id or password",
        });
      }
      console.log("user_obj rrrr ", user_obj);
      console.log("user_obj pass hhhhhh", user_obj.password);

      decryptedString_user = cryptr.decrypt(user_obj.password); // abc123
      console.log("user_obj_decryptedString", decryptedString_user);

      if (decryptedString_user != req.body.password) {
        return res.status(400).send({
          ResponseCode: "Fail",
          message: "invalid user id or password",
        });
      }

      const accessToken = jwt.sign(
        { email: req.body.email, password: req.body.password },
        "multivendor"
        // process.env.ACCESS_TOKEN_SECRET // "multivendor"
      );
      res.header("authorization", `bearer ${accessToken}`);
     res.header("Access-Control-Expose-Headers", `*`);

      console.log("======accessTokenaccessToken========", accessToken);
      let users_obj = {};
      users_obj.token = accessToken;
    
    const users_token_save = await user_obj.update(
      users_obj,
      {
          where: { password : req.body.password }
      }
  );

       console.log("======  user_obj  user_obj  user_obj========",   user_obj.token);
      return res.send({
        ResponseCode: "Success",
        data: {
          user: user_obj,
        
        },
      });
    } catch (ex) {
      return res.status(400).send({
        ResponseCode: "Fail",
        errorMessage: ex.message,
      });
    }
  }
);

router.get("/adminUsers", async (req, res) => {
  try {
    let user = await user.getAdminUsers();
    return res.send({ ResponseCode: "Success", data: user });
  } catch (ex) {
    return res.status(400).send({
      ResponseCode: "Fail",
      errorMessage: ex.message,
    });
  }
});

module.exports = router;
