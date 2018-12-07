const passport = require("passport");
const mongoose = require("mongoose");
const User = mongoose.model("User");
const Map = mongoose.model("Map");
var keys = require("./config/keys");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const jwt_secret = keys.jwt;

module.exports.register = async (req, res, next) => {
  const user = new User();

  user.name = req.body.name;
  user.email = req.body.email;

  user.setPassword(req.body.password);

  try {
    await user.save();
    const token = user.generateJwt();
    res.status(200).json({
      userInfo: user,
      token: token
    });
  } catch (err) {
    res.status(401).json(err);
  }
};

module.exports.login = (req, res) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      res.status(401).json(err);
      return;
    }

    if (user) {
      const token = user.generateJwt();
      res.status(200).json({
        userInfo: user,
        token: token
      });
    } else {
      res.status(401).json(info);
    }
  })(req, res);
};

module.exports.fbAuth = (req, res, next) => {
  passport.authenticate("facebook", {
    state: req.query.linkinguri,
    scope: ["email"],
  })(req, res, next);
};

module.exports.fbAuthCB = (req, res, next) => {
  passport.authenticate("facebook", (err, user, info) =>
    generateTokenAndRedirect(req, res, next, err, user, info)
  )(req, res, next);
};

module.exports.goAuth = (req, res, next) => {
  passport.authenticate("google", {
    scope: ["email"],
    state: req.query.linkinguri
  })(req, res, next);
};

module.exports.goAuthCB = (req, res, next) => {
  passport.authenticate("google", (err, user, info) =>
    generateTokenAndRedirect(req, res, next, err, user, info)
  )(req, res, next);
};
module.exports.getMaps = (req, res) => {
  res.send("maps");
};
module.exports.makeMap = async (req, res) => {
  var uid = req.params.uid;
  console.log("UID", uid);
  var map = new Map();
  map.user = uid;
  map.save();
  res.json(map._id);
};
module.exports.saveMap = async (req, res) => {
  var uid = req.params.uid;
  Map.findOne({ _id: uid }, (err, map) => {
    map.body = req.body.headers.map
    map.save();
  });
  res.json("success");
};
module.exports.getMaps = async (req, res) => {
  var uid = req.params.uid;
  Map.remove({body:null}, function(err) {
    if (err) {
      message.type = 'error';
    }
  })
  Map.find({ user: uid, body: {$ne: null} }, (err, maps) => {
  }).then(data=>{
    res.json(data);
  })
};
module.exports.getMap = async (req, res) => {
  var uid = req.params.uid;
  Map.findOne({ _id: uid}, (err, map) => {
  }).then(data=>{
    res.json(data);
  })
};
const generateTokenAndRedirect = (req, res, next, err, user, info) => {
  if (err) {
    return next(err);
  }
  if (user) {
    const token = user.generateJwt();
    return res.redirect(`${req.query.state}?token=${token}`);
  } else {
    return res.redirect("${req.query.state}");
  }
};
