const express = require("express");
const router = express.Router();
const multer = require("multer");
const slugify = require("slugify");
const moment = require("moment");
const anaYemekController = require("../controller/anaYemekController.js");

const yemekEkleFilesStorage = multer.diskStorage({
  destination: "./public/yemekEkleFiles",
  filename: function(req, file, cb) {
    cb(
      null,
      moment().format("YYYY-MM-DD-hh-mm-ss-SSS") +
        "-" +
        slugify(file.originalname)
    );
  }
});

router.post(
  "/",
  multer({ storage: yemekEkleFilesStorage }).any(),
  anaYemekController.addAnaYemek
);
router.get("/all", anaYemekController.allAnaYemekler);
router.get("/:_id", anaYemekController.getYemek);

module.exports = router;
