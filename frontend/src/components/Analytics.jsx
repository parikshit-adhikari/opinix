import React from "react";
import Keywords from "./Keywords";
import SentimentByTopics from "./SentimentByTopics";
import SentimentOverTime from "./SentimentOverTime";
import "../../styles/components/Analytics.css";
import Comments from "./Comments";
import PieChart from "./PieChart";

const Analytics = ({
  comments,
  keywords,
  sentimentByTopics,
  sentimentOverTime,
  percentage,
}) => {
  return (
    <div className="ant-outer-div">
      <div className="ant-comments-div">
        <Comments comments={comments} />
      </div>
      <div className="ant-rem-div">
        <PieChart percentage={percentage} />
        {/* <SentimentByTopics sentimentByTopics={sentimentByTopics} /> */}
        <SentimentOverTime sentimentOverTime={sentimentOverTime} />
        <Keywords keywords={keywords} />
      </div>
    </div>
  );
};

export default Analytics;
