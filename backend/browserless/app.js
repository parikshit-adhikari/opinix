const express = require("express");
const app = express();
const cors = require("cors");
const scrape = require("./routes/scrape");

app.use(cors());
app.use(express.json());

require("dotenv").config();

const port = 8080;

app.use("/api/scraper", scrape);

const start = () => {
  app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
  });
};

start();
