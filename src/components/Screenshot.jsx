import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function Screenshot({ imgName }) {
  if (imgName === "reader-mode") {
    return (
      <div>{imgName && <StaticImage src="../images/icon.png" alt="xxx" />}</div>
    );
  }
  if (imgName === "highlights") {
    return (
      <div>{imgName && <StaticImage src="../images/icon.png" alt="xxx" />}</div>
    );
  }
  if (imgName === "whats-next") {
    return (
      <div>
        {imgName && (
          <StaticImage src="../images/chrome-store-icon.webp" alt="xxx" />
        )}
      </div>
    );
  }
}
