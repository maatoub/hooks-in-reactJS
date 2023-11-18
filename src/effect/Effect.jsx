import React, { useEffect, useState } from "react";

const Effect = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      {images.map((e) => {
        <div key={e.id} className="card">
          <img src={e.url}></img>
          <p>{e.title}</p>
        </div>;
      })}
      <h1></h1>
    </div>
  );
};

export default Effect;
