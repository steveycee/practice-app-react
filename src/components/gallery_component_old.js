import { useState } from "react";

// const GalleryData = [
//   {
//     image:
//       "https://images.unsplash.com/photo-1610296669228-602fa827fc1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3BhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3BhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1608178398319-48f814d0750c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3BhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNwYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1457364887197-9150188c107b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNwYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
//   },
// ];

// const GalleryData = [
//   "https://images.unsplash.com/photo-1610296669228-602fa827fc1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3BhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",

//   "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3BhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",

//   "https://images.unsplash.com/photo-1608178398319-48f814d0750c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3BhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",

//   "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNwYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",

//   "https://images.unsplash.com/photo-1457364887197-9150188c107b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNwYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
// ];

const GalleryData = [1, 2, 3, 4, 5];
function Gallery() {
  const [translateXValue, setTranslateXValue] = useState(0);

  const nextImage = () => {
    setTranslateXValue(translateXValue - 100);
  };

  const previousImage = () => {
    setTranslateXValue(translateXValue + 100);
  };

  if (!Array.isArray(GalleryData) || GalleryData.length <= 0) {
    return null;
  }

  return (
    <div
      className="tile border slider"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <button onClick={previousImage}>Previous</button>
        <button onClick={nextImage}>Next</button>
      </div>

      <div style={{ display: "flex", flexDirection: "row" }}>
        {GalleryData.map((image, index) => {
          return (
            <div
              key={index}
              className="slide"
              style={{
                transform: `translateX(${translateXValue}%)`,
              }}
            >
              {image}
              {/* <img src={image}></img> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;
