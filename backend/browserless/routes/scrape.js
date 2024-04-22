const express = require("express");
const router = express.Router();

const {
  scrape
} = require("../controllers/scrape");

router.post("/", scrape);

module.exports = router;
