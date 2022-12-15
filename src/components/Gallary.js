import React, { useState, useEffect } from "react";

const baseURL = "https://jsonplaceholder.typicode.com/photos";
const Gallary = () => {
  const [images, setImages] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(baseURL);
      const image = await response.json();
      setImages(image);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(images);
  return (
    <div id="gallary">
      <h1 className="image-title">Image Gallary</h1>
      <div className="wrap-box">
        {images.slice(0, 12).map((image) => {
          return (
            <div className="box">
              <img className="img-div" src={image.url} alt={image.title} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallary;
