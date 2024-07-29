import React from "react";


const Photo = ({img, title,caption}) => {
   
return (
  <div className="photo">
    <img className="photo_img" src={img} alt={title}/>
      <h3 className="photo_title">{title}</h3>
      <p className="photo_caption">{caption}</p>
  </div>
  );
};

export default Photo;