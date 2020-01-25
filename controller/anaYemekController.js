const AnaYemekler = require("../modals/AnaYemekler");

exports.addAnaYemek = async (req, res) => {
  const { anaYemek, error } = await AnaYemekler.addAnaYemek(req.body);
  if (!error) {
    res.json({
      code: 200,
      data: {
        anaYemek
      }
    });
  } else {
    res.json({
      code: 422,
      message: error.message
    });
  }
};

exports.allAnaYemekler = async (req, res) => {
  const { anaYemekler, error } = await AnaYemekler.allAnaYemekler(req.body);
  console.log(req.body.file);
  if (!error) {
    res.json({
      code: 200,
      data: {
        anaYemekler
      }
    });
  } else {
    res.json({
      code: 422,
      message: error.message
    });
  }
};
