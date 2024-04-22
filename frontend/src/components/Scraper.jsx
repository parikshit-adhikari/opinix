import React, { useState } from "react";
import { useScrapeReviewMutation } from "../slices/analyzeApiSlice";
import { saveAs } from "file-saver";
import "../../styles/components/Scraper.css";
import Loading from "./Loading";
import { toast } from "react-toastify";

const Scraper = () => {
  const [scrapeReview, { isLoading }] = useScrapeReviewMutation();
  const [productLink, setProductLink] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await scrapeReview({ productLink }).unwrap();
      const reviewText = response.reviews;
      const reviewTime = response.dates;
      setProductLink("");

      // generate csv content
      let csvContent = "reviewText,reviewTime\n";
      for (let i = 0; i < reviewText.length; i++) {
        csvContent += `"${reviewText[i]}","${reviewTime[i]}"\n`;
      }
      // convert csv content to blob
      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8" });
      // save blob as a file
      saveAs(blob, "product_reviews.csv");
      toast.success("Data successfully collected")
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error has occured. Invalid link")
    }
  };

  return (
    <div>
      <p className="sc-text">Or, Enter a product link to collect data.</p>
      <form onSubmit={handleSubmit} className="sc-form">
        <input
          type="text"
          placeholder="Enter product link"
          value={productLink}
          onChange={(e) => setProductLink(e.target.value)}
          required
          className="sc-input"
        />
        <button className="sc-button" type="submit">
          Collect Data
        </button>
      </form>
      <div className="sc-loading">
        {isLoading && <Loading size={50} style={"0.25rem 0 0 0"} />}
      </div>
    </div>
  );
};

export default Scraper;
