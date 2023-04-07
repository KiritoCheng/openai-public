import React, { useEffect, useState } from "react";
import "./index.css";

export const Loading = () => {
  return (
    <div>
      Please wait&nbsp;
      <span className="waiting-dots">
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </span>
    </div>
  );
};
