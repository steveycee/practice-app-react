import { useState } from "react";

const GalleryData = [
  {
    image:
      "https://images.unsplash.com/photo-1610296669228-602fa827fc1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3BhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
  },
  {
    image:
      "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3BhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
  },
  {
    image:
      "https://images.unsplash.com/photo-1608178398319-48f814d0750c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3BhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
  },
  {
    image:
      "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNwYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    image:
      "https://images.unsplash.com/photo-1457364887197-9150188c107b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNwYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
];

function Gallery() {
  const [current, setCurrent] = useState(0);
  const length = GalleryData.length;

  const nextImage = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    console.log(current);
  };

  const previousImage = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    console.log(current);
  };

  if (!Array.isArray(GalleryData) || GalleryData.length <= 0) {
    return null;
  }

  return (
    <div className="tile border gallery">
      <button onClick={previousImage}>Left</button>
      <button onClick={nextImage}>Right</button>
      {GalleryData.map((gallery, index) => {
        return <img src={gallery.image} alt="space"></img>;
      })}
    </div>
  );
}

export default Gallery;
