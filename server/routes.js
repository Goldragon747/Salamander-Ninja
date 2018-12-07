const express = require("express");
const router = express.Router();
require("dotenv").config();
var keys = require("./config/keys");
const jwt = require("express-jwt");
const auth = jwt({
  secret: keys.jwt,
  requestProperty: "payload"
});
const authCtrl = require("./authController");
const profileCtrl = require("./profileController");

router.post("/register", authCtrl.register);
router.post("/login", authCtrl.login);
router.get("/auth/facebook", authCtrl.fbAuth);
router.get("/auth/facebook/callback", authCtrl.fbAuthCB);
router.get("/auth/google", authCtrl.goAuth);
router.get("/auth/google/callback", authCtrl.goAuthCB);
router.post("/savemap/:uid", authCtrl.saveMap);
router.post("/makemap/:uid", authCtrl.makeMap);
router.get("/getmaps/:uid", authCtrl.getMaps);
router.get("/getmap/:uid", authCtrl.getMap);
router.get("/secret/:uid", auth, profileCtrl.secret);
router.post("/pushtoken/add", profileCtrl.addPushNotificationId);
router.post("/pushtoken/send", profileCtrl.sendPushNotifications);

module.exports = router;
