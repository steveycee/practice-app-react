import { useState } from "react";
import "./slider.css";

function ImgComp({ src }) {
  let imgStyles = {
    width: 100 + "%",
    heigh: "auto",
  };
  return <img src={src} alt="slide-img" style={imgStyles}></img>;
}

export default ImgComp;
