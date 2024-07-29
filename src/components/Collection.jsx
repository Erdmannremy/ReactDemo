import React from "react";
import Photo from "./Photo";



const Collection = () => {
return (
    <div className="collection">
    <Photo 
    img="https://st.depositphotos.com/thumbs/1102719/image/4453/44532821/api_thumb_450.jpg?forcejpeg=true" 
    title="voyage"
    caption="Mon Départ"
    />
    <Photo 
    img="https://st.depositphotos.com/thumbs/2890953/image/4275/42751141/api_thumb_450.jpg?forcejpeg=true"
    title="Voyage"
    caption="En route pour l'aventure"   
    />

    <Photo 
    img="https://st.depositphotos.com/thumbs/1102719/image/4453/44532821/api_thumb_450.jpg?forcejpeg=true"
    title="voyage"
    caption="Au Bout Du Monde"   
    />
        
        
        </div>
);
};

export default Collection;
