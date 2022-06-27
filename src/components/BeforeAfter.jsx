import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { ComparisonSlider } from "react-comparison-slider";

const handleComparisonHover = (e) => {
  const slider = document.getElementById("comparison-slider");
  if (e.type === "mouseenter") {
    slider.style.transform = "scale(1.25)";
    slider.style.boxShadow = "0px 0px 20px 0px rgba(255,165,0,1)";
  }
  if (e.type === "mouseleave") {
    slider.style.transform = "scale(1)";
    slider.style.boxShadow = "0px 0px 10px 0px rgba(255,165,0,05)";
  }
};

export default function BeforeAfter() {
  return (
    <div
      style={{
        boxShadow: "0px 10px 30px 0px rgba(0,0,0,0.75)",
        padding: "1em",
      }}
      onMouseEnter={(e) => handleComparisonHover(e)}
      onMouseLeave={(e) => handleComparisonHover(e)}
      aria-hidden="true"
    >
      <ComparisonSlider
        defaultValue={0}
        itemOne={<StaticImage src="../images/before.jpg" alt="xxx" />}
        itemTwo={<StaticImage src="../images/after.jpg" alt="xxx" />}
        aspectRatio={1000 / 670}
        orientation="horizontal"
        handle={() => (
          <div
            id="comparison-slider"
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              backgroundColor: "orange",
              boxShadow: "0px 0px 10px 0px rgba(255,165,0,05)",
              transition: "transform 0.2s",
            }}
          ></div>
        )}
      />
    </div>
  );
}
