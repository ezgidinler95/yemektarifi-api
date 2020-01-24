const express = require("express");
const router = express.Router();

const anaYemekController = require("../controller/anaYemekController.js");

router.post("/", anaYemekController.addAnaYemek);
router.get("/all", anaYemekController.allAnaYemekler);

module.exports = router;
