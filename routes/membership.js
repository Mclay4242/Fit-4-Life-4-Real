const express = require("express");
const router = express.Router();
const Membership = require("../models/memberships");

//Login page
router.get("/", async (req, res) => {
  try {
    // add conditions into empty object below... login requirements
    const members = await Membership.find({});
    res.render("membership/index", { members: members });
  } catch {
    res.redirect("/");
  }
});

//New user route
router.get("/new", (req, res) => {
  res.render("membership/new", { member: new Membership() });
});

//create user route
router.post("/", async (req, res) => {
  const member = new Membership({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    password2: req.body.password,
  });
  try {
    const newMember = await member.save();
    //res.redirect(`membership/${newMember.id}`);
    res.render("membership");
  } catch {
    res.render("membership/new", {
      member: member,
      errorMessage: "Error creating account",
    });
  }
});

module.exports = router;
