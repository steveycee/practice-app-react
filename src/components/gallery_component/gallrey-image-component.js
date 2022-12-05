// import { useState } from "react";
import "./gallery-component.css";

function GalleryImageComponent({ src }) {
  let imgStyles = {
    width: 100 + "%",
    heigh: "auto",
  };
  return <img src={src} alt="slide-img" style={imgStyles}></img>;
}

export default GalleryImageComponent;
