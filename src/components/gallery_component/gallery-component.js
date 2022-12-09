import { useState } from "react";
import "./gallery-component.css";
import GalleryImageComponent from "./gallery-image-component";
import i1 from "./images/1.jpg";
import i2 from "./images/2.jpg";
import i3 from "./images/3.jpg";
import i4 from "./images/4.jpg";
import i5 from "./images/5.jpg";

function Gallery() {
  // let sliderArr = [1, 2, 3, 4, 5];
  let sliderArr = [
    <GalleryImageComponent src={i1} />,
    <GalleryImageComponent src={i2} />,
    <GalleryImageComponent src={i3} />,
    <GalleryImageComponent src={i4} />,
    <GalleryImageComponent src={i5} />,
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
      <h2>Gallery Component</h2>
      <p>
        Basic Gallery component with locally stored images. Now with Jest Tests
        and Github actions. 🧪.
      </p>
      <div className="slider">
        {sliderArr.map((item, index) => {
          return (
            <div
              key={index}
              aria-label={`slide ${index}`}
              title="slide"
              className="slide"
              style={{
                transform: `translateX(${x}%)`,
              }}
            >
              {item}
            </div>
          );
        })}
        <button
          aria-label="go to previous image"
          id="goLeft"
          className="navButton"
          onClick={goLeft}
        >
          ◀
        </button>
        <button
          aria-label="go to next image"
          id="goRight"
          className="navButton"
          onClick={goRight}
        >
          ▶
        </button>
      </div>
    </div>
  );
}

export default Gallery;
