const express = require("express");
const router = express.Router();
const { ViewUrl } = require("../controllers/index");
const { GetAll, Shorten } = require("../controllers/url");

app.get("/:urlId", ViewUrl);

app.post("/short", Shorten);

app.get("/all", GetAll);

module.exports = router;
