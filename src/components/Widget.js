import React from "react";
import "./Widget.css";
import WidgetContent from "./WidgetContent";

function Widget() {
  return (
    <div className="widget">
      <div className="widget__header">
        <h1><b>Top Tips of the Day</b></h1>
      </div>
      <div className="widget__contents">
        <WidgetContent />
      </div>
    </div>
  );
}

export default Widget;