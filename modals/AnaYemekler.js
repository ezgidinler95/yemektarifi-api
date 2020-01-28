const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const anaYemeklerSchema = new Schema({
  adi: {
    type: String
  },
  tarifi: {
    type: String
  },
  malzeme: {
    type: String
  },
  pismesüresi: {
    type: Number
  },
  files: []
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

module.exports.allAnaYemekler = async params => {
  try {
    return AnaYemekler.find({})
      .then(anaYemekler => {
        return { anaYemekler };
      })
      .catch(error => {
        return { error };
      });
  } catch (error) {
    return { error };
  }
};

module.exports.getYemek = params => {
  try {
    return AnaYemekler.findById(mongoose.Types.ObjectId(params._id))
      .then(anaYemek => {
        return { anaYemek };
      })
      .catch(error => {
        return { error };
      });
  } catch (error) {
    return { error };
  }
};

module.exports.updateYemek = params => {
  try {
    return AnaYemekler.findByIdAndUpdate(
      mongoose.Types.ObjectId(params._id),
      { ...params },
      { new: true }
    )
      .then(updatedYemek => {
        return { yemek: updatedYemek };
      })
      .catch(error => {
        return { error };
      });
  } catch (error) {
    return { error };
  }
};

module.exports.deleteYemek = params => {
  try {
    return AnaYemekler.findByIdAndRemove(mongoose.Types.ObjectId(params))
      .then(deletedYemek => {
        return { yemek: deletedYemek };
      })
      .catch(error => {
        return { error };
      });
  } catch (error) {
    return { error };
  }
};
