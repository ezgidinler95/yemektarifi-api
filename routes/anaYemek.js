const express = require("express");
const router = express.Router();

const anaYemekController = require("../controller/anaYemekController.js");

router.post("/", anaYemekController.addAnaYemek);

module.exports = router;
