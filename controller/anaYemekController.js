const AnaYemekler = require("../modals/AnaYemekler");

exports.addAnaYemek = async (req, res) => {
  if (req.files.length > 0) {
    req.body.files = [];
    req.files.map(file => {
      req.body.files.push(file.path.replace("public/yemekEkleFiles/", ""));
    });
  }
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

exports.getYemek = async (req, res) => {
  const { anaYemek, error } = await AnaYemekler.getYemek(req.params);
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

exports.deleteYemek = async (req, res) => {
  const { yemek, error } = await AnaYemekler.deleteYemek(req.body.id);
  if (!error) {
    res.json({
      code: 200,
      data: {
        yemek
      }
    });
  } else {
    res.json({
      code: 422,
      message: error.message
    });
  }
};

exports.updateYemek = async (req, res) => {
  if (req.files.length > 0) {
    req.body.files = [];
    req.files.map(file => {
      req.body.files.push(file.path.replace("public/yemekEkleFiles/", ""));
    });
  }
  const { anaYemek, error } = await AnaYemekler.updateYemek(req.body);
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
