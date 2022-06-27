import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function Screenshot({ imgName }) {
  if (imgName === "highlights") {
    return (
      <div
        style={{
          boxShadow: "0px 10px 50px 0px rgba(0,0,0,0.75)",
          padding: "0em 2em 0em 2em",
        }}
      >
        {imgName && (
          <StaticImage
            src="../images/highlights.jpg"
            alt="text comparison with highlighted words"
          />
        )}
      </div>
    );
  }

  if (imgName === "whats-next") {
    return (
      <div style={{ padding: "0em 2em 0em 2em" }}>
        {imgName && (
          <StaticImage
            src="../images/chrome-store-icon.png"
            alt="chrome store icon"
          />
        )}
      </div>
    );
  }
}
