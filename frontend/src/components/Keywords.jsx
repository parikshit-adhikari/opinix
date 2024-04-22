import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";
import cloud from "d3-cloud";

const Keywords = ({ keywords }) => {
  const [dimensions, setDimensions] = useState({ width: 800, height: 400 });
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    const padding = 10;

    const colorScale = d3.scaleOrdinal([
      "#000000", // Black
      "#001F3F", // Navy Blue
      "#4169E1", // Royal Blue
      "#8E24AA", // Plum
    ]);

    const wordCloud = cloud()
      .size([dimensions.width, dimensions.height])
      .words(keywords.map((keyword) => ({ text: keyword, size: 20 }))) // Adjust font size as needed
      .padding(padding)
      .rotate(() => 0)
      .fontSize((d) => d.size)
      .on("end", draw);

    wordCloud.start();

    function draw(words) {
      svg.selectAll("*").remove();

      svg
        .attr("width", dimensions.width)
        .attr("height", dimensions.height)
        .append("g")
        .attr(
          "transform",
          `translate(${dimensions.width / 2},${dimensions.height / 2})`
        )
        .selectAll("text")
        .data(words)
        .enter()
        .append("text")
        .style("font-size", (d) => d.size + "px")
        .style("font-weight", "bold")
        .style("fill", (d, i) => colorScale(i))
        .attr("text-anchor", "middle")
        .attr("transform", (d) => `translate(${d.x},${d.y})rotate(${d.rotate})`)
        .text((d) => d.text);
    }

    const handleResize = () => {
      const containerWidth = svgRef.current.parentElement.clientWidth;
      const containerHeight = containerWidth * 0.5; // Adjust aspect ratio as needed
      setDimensions({ width: containerWidth, height: containerHeight });
    };

    handleResize(); // Initial resize

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="kw-outer-div">
      <h3> Keywords Extraction</h3>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default Keywords;
