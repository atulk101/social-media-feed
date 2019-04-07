import React from "react";
import Timeline from "../Timeline/Timeline";
export const Landing = function() {
  return (
    <div className="landing">
      <div className="dark-overlay landing-inner text-dark">
        <div className="container ">
          <div className="clearfix mt-3" />
          <Timeline />
        </div>
      </div>
    </div>
  );
};
