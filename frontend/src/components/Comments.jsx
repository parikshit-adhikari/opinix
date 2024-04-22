import React, { useState } from "react";
import "../../styles/components/Comments.css";

const Comments = ({ comments }) => {
  const [selectedSentiment, setSelectedSentiment] = useState("all");

  const handleSentimentChange = (sentiment) => {
    setSelectedSentiment(sentiment);
  };

  let filteredComments;
  if (selectedSentiment === "all") {
    filteredComments = Object.entries(comments);
  } else {
    filteredComments = Object.entries(comments).filter(
      ([_, value]) => value.toLowerCase() === selectedSentiment
    );
  }

  const commentList = filteredComments.map(([key, value], index) => {
    const sentimentClass = value.toLowerCase();

    return (
      <div key={index}>
        <div className="ct-outer-div">
          <div className={`ct-key-div ${sentimentClass}`}>{key}</div>
          <hr />
          <div className={`ct-value-div ${sentimentClass}`}>{value}</div>
        </div>
        <hr className="bottom-hr" />
      </div>
    );
  });

  return (
    <div className="ct-list">
      <div className="ct-buttons">
        <button
          onClick={() => handleSentimentChange("all")}
          className={selectedSentiment === "all" ? "selected" : ""}
        >
          All
        </button>
        <button
          onClick={() => handleSentimentChange("positive")}
          className={selectedSentiment === "positive" ? "selected" : ""}
        >
          Positive
        </button>
        <button
          onClick={() => handleSentimentChange("negative")}
          className={selectedSentiment === "negative" ? "selected" : ""}
        >
          Negative
        </button>
        <button
          onClick={() => handleSentimentChange("neutral")}
          className={selectedSentiment === "neutral" ? "selected" : ""}
        >
          Neutral
        </button>
      </div>
      <div className="ct-title">
        <h3>Comments</h3>
        <h3>Sentiments</h3>
      </div>
      {commentList}
    </div>
  );
};

export default Comments;
