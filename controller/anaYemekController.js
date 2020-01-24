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
  const { anaYemeks, error } = await AnaYemekler.allAnaYemekler(req.body);
  if (!error) {
    res.json({
      code: 200,
      data: {
        anaYemeks
      }
    });
  } else {
    res.json({
      code: 422,
      message: error.message
    });
  }
};
