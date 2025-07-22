const express = require("express");

const { generatenewshorturl } = require("../controller/url");

const router = express.Router();

router.post("/shorten", generatenewshorturl);

module.exports = router;
