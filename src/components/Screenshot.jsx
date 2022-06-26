import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function Screenshot({ imgName }) {
  if (imgName === "highlights") {
    return (
      <div
        style={{
          boxShadow: "0px 10px 50px 0px rgba(0,0,0,0.75)",
          padding: "1em",
        }}
      >
        {imgName && <StaticImage src="../images/highlights.jpg" alt="xxx" />}
      </div>
    );
  }
  if (imgName === "whats-next") {
    return (
      <div style={{ padding: "2em" }}>
        {imgName && (
          <StaticImage src="../images/chrome-store-icon.webp" alt="xxx" />
        )}
      </div>
    );
  }
}
