const express = require("express");
const { createUser, loginUser } = require("../controllers/auth.controller");
const router = express.Router();

router.post("/register", createUser);

router.post("/", loginUser);

module.exports = router;