import React from "react";
import "./WidgetContent.css";

function WidgetContent() {
  return (
    <div className="widget__contents">
      <div className="widget__content">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-ti-1737435-100-jxcfmjdvwvpkcketifttdmeeimxcatua.jpeg"
          alt=""
        />
        <div className="widget__contentTitle">
          <h5>Accessorize Smartly</h5>
          <p>A statement necklace, a stylish hat, or a classy handbag can elevate a simple outfit</p>
        </div>
      </div>
      <div className="widget__content">
        {/* <img
          src="https://wallpapercave.com/wp/wp2244215.jpg"
          alt=""
        /> */}
        <div className="widget__contentTitle">
          <h5>Fit Over Fashion</h5>
          <p>No matter how trendy an item is, if it doesn't fit you well, it won't look good. </p>
        </div>
      </div>
      <div className="widget__content">
        {/* <img
          src="https://wallpapercave.com/wp/wp2244215.jpg"
          alt=""
        /> */}
        <div className="widget__contentTitle">
          <h5>Color Coordination</h5>
          <p>Neutral colors are versatile, but don't be afraid to experiment with bold colors and patterns</p>
        </div>
      </div>
      <div className="widget__content">
        {/* <img
          src="https://wallpapercave.com/wp/wp2244215.jpg"
          alt=""
        /> */}
        <div className="widget__contentTitle">
          <h5>Footwear Matters</h5>
          <p>Shoes can significantly impact your outfit. Invest in a few quality pairs that are versatile, like classic sneakers, comfortable flats, and a pair of stylish boots</p>
        </div>
      </div>
    
    </div>
  );
}

export default WidgetContent;