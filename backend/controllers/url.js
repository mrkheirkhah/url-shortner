const shortid = require("shortid");
const Url = require("../models/Url");
const { validateUrl } = require("../utils/urlValidator");

async function GetAll(req, res) {
  try {
    const data = await Url.find();
    res.json(data);
  } catch (err) {
    return next(error);
  }
}

async function Shorten(req, res) {
  console.log("HERE", req.body.origUrl);
  const { origUrl } = req.body;
  const base = `http://localhost:3333`;

  const urlId = shortid.generate();
  if (validateUrl(origUrl)) {
    try {
      let url = await Url.findOne({ origUrl });
      if (url) {
        res.json(url);
      } else {
        const shortUrl = `${base}/${urlId}`;

        url = new Url({
          originUrl: origUrl,
          shortUrl,
          urlId,
          date: new Date(),
        });

        await url.save();
        res.json(url);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json("Server Error");
    }
  } else {
    res.status(400).json("Invalid Original Url");
  }
}

module.exports = { GetAll, Shorten };
