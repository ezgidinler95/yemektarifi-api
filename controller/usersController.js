exports.userLogin = async (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    return res.json({
      code: 404,
      message: "Lütfen 'email' ve 'password' alanlarını doldurunuz!!!"
    });
  }
  if (req.body.email == "ezgidnlr@mail.com") {
    if (req.body.password == "123456") {
      res.json({
        code: 200
      });
    } else {
      res.json({
        code: 400,
        message: req.body.email + " Adlı kullanıcının şifresi eşleşmedi."
      });
    }
  }
};
