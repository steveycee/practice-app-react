import { useState } from "react";
import "./slider.css";
import ImgComp from "./ImgComp";
import i1 from "./pics/1.avif";
import i2 from "./pics/2.avif";
import i3 from "./pics/3.avif";
import i4 from "./pics/4.avif";
import i5 from "./pics/5.avif";

function Gallery() {
  // let sliderArr = [1, 2, 3, 4, 5];
  let sliderArr = [
    <ImgComp src={i1} />,
    <ImgComp src={i2} />,
    <ImgComp src={i3} />,
    <ImgComp src={i4} />,
    <ImgComp src={i5} />,
  ];
  const [x, setX] = useState(0);
  const goLeft = () => {
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
    console.log(x);
  };
  const goRight = () => {
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
    console.log(x);
  };
  return (
    <div className="tile">
      <div className="slider">
        {sliderArr.map((item, index) => {
          return (
            <div
              key={index}
              className="slide"
              style={{
                transform: `translateX(${x}%)`,
              }}
            >
              {item}
            </div>
          );
        })}
        <button id="goLeft" className="navButton" onClick={goLeft}>
          ◀
        </button>
        <button id="goRight" className="navButton" onClick={goRight}>
          ▶
        </button>
      </div>
    </div>
  );
}

export default Gallery;
