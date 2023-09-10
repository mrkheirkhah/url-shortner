const express = require("express");
const router = express.Router();
const { ViewUrl } = require("../controllers/index");
const { GetAll, Shorten } = require("../controllers/url");

router.get("/all", GetAll);

router.post("/short", Shorten);

router.get("/:urlId", ViewUrl);

module.exports = router;
