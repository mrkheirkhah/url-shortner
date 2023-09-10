const Url = require("../models/Url");

async function ViewUrl(req, res) {
  try {
    const url = await Url.findOne({ urlId: req.params.urlId });
    console.log(url);
    if (url) {
      url.clicks++;
      url.save();
      return res.redirect(url.originUrl);
    } else res.status(404).json("Not found");
  } catch (err) {
    console.log(err);
    res.status(500).json("Server Error");
  }
}

module.exports = { ViewUrl };
