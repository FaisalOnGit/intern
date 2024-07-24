import React from "react";
import "remixicon/fonts/remixicon.css";

export default function RunningText() {
  return (
    <div className="bg-custom-blue text-white py-2 font-thin overflow-hidden whitespace-nowrap">
      <div className="inline-block animate-marquee">
        <i className="ri-megaphone-line mr-2"></i>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra
        nisi quis elementum convallis
      </div>
    </div>
  );
}
