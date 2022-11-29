const express = require("express");
const router = express.Router();
const Membership = require("../models/memberships");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");

//Login page
router.get("/", async (req, res) => {
  res.render("membership");
});

//New user route
router.get("/new", (req, res) => {
  res.render("membership/new", { member: new Membership() });
});

//create user route
router.post("/", async (req, res) => {
  const saltPassword = await bcrypt.genSalt(10);
  const securePasswoard = await bcrypt.hash(req.body.password, saltPassword);
  const member = new Membership({
    username: req.body.username,
    email: req.body.email,
    password: securePasswoard,
    password2: securePasswoard,
  });
  member
    .save()
    .then((data) => {
      // res.json(data);
      //res.redirect(`membership/${newMember.id}`);
      res.render("membership");
    })
    .catch((err) => {
      res.json(err);
      res.render("membership/new", {
        member: member,
        errorMessage: "Error creating account",
      });
    });
});

module.exports = router;
