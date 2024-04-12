const express = require("express");
const { createUser, loginUser } = require("../controllers/auth.controller");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");
const router = express.Router();

router.post("/register",
[
    check('username','El nombre de usuario es obligatorio').not().isEmpty(),
    check('password','El password debe de ser de 6 caracteres').isLength({min:6}),
    validarCampos
],
createUser);

router.post("/", 
[
    check('username','El nombre de usuario es obligatorio').not().isEmpty(),
    check('password','El password debe de ser de 6 caracteres').isLength({min:6}),
    validarCampos
],
loginUser);

module.exports = router;