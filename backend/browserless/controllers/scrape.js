const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");
const { DateTime } = require("luxon");

const scrape = async (req, res, next) => {
  let browser = null;

  try {
    const { link } = req.body;

    if (!link || !isValidURL(link)) {
      return res.status(400).json({ message: "Invalid link provided." });
    }

    browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36"
    );

    await page.goto(link, { waitUntil: "networkidle2", timeout: 60000 });

    await page.waitForSelector(".a-section.review", { timeout: 60000 });

    const reviews = await page.$$eval(
      '.a-section.review[data-hook="review"] .a-expander-content.reviewText.review-text-content.a-expander-partial-collapse-content',
      (elements) => elements.map((element) => element.textContent.trim())
    );

    const dates = await page.$$eval(
      '.a-section.review[data-hook="review"] .review-date',
      (elements) =>
        elements.map((element) => element.textContent.trim().split("on ")[1])
    );

    const formattedDates = dates
      .map((date) => {
        try {
          const parsedDate = DateTime.fromFormat(date, "MMMM d, yyyy");
          return parsedDate.isValid ? parsedDate.toISODate() : null;
        } catch (error) {
          console.error(`Error parsing date: ${date}`, error);
          return null;
        }
      })
      .filter(Boolean);

    await browser.close();

    const response_data = {
      message: "Data scraped successfully",
      productLink: link,
      reviews: reviews,
      dates: formattedDates,
    };

    const csvContent = reviews
      .map(
        (review, index) =>
          `"${review.replace(/"/g, '""')}",${formattedDates[index] || ""}`
      )
      .join("\n");

    const filePath = path.join(__dirname, "..", "media", "reviews.csv");

    const mediaDir = path.join(__dirname, "..", "media");
    if (!fs.existsSync(mediaDir)) {
      fs.mkdirSync(mediaDir, { recursive: true });
    }

    fs.writeFileSync(filePath, "reviewText,reviewTime\n" + csvContent, {
      encoding: "utf8",
    });

    res.json(response_data);
  } catch (error) {
    console.error(error.stack);
    res
      .status(500)
      .json({ message: "An error occurred while scraping the website." });
  } finally {
    if (browser) {
      await browser.close();
    }
  }
};

const isValidURL = (url) => {
  const urlPattern = /^(http|https):\/\/[^ "]+$/;
  return urlPattern.test(url);
};

module.exports = { scrape };
