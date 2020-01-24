const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const anaYemeklerSchema = new Schema({
  adi: {
    type: String
  },
  tarifi: {
    type: String
  },
  resim: {}
});

const AnaYemekler = (module.exports = mongoose.model(
  "AnaYemekler",
  anaYemeklerSchema,
  "AnaYemekler"
));

module.exports.addAnaYemek = async params => {
  const anaYemek = new AnaYemekler(params);
  try {
    return anaYemek
      .save()
      .then(async savedAnaYemek => {
        return { anaYemek: savedAnaYemek };
      })
      .catch(error => {
        return { error };
      });
  } catch (error) {
    return { error };
  }
};
