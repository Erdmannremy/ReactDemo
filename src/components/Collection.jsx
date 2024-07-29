import React from "react";
import Photo from "./Photo";
import Button from "./Button";



const Collection = () => {
return (
    <div className="collection">
    <Photo 
    img="https://st.depositphotos.com/thumbs/1003723/image/2913/29131335/api_thumb_450.jpg?forcejpeg=true" 
    title="voyage"
    caption="Mon Départ"
    />
    <Button/>
    <Photo 
    img="https://st.depositphotos.com/thumbs/2890953/image/4275/42751141/api_thumb_450.jpg?forcejpeg=true"
    title="Voyage"
    caption="En route vers l'aventure destination..."   
    />
    <Photo 
    img="https://st.depositphotos.com/thumbs/1102719/image/4453/44532821/api_thumb_450.jpg?forcejpeg=true"
    title="voyage"
    caption="On en profite pour faire une petite sieste."   
    />
      <Photo 
    img="https://st2.depositphotos.com/thumbs/1252160/image/7133/71338357/api_thumb_450.jpg?forcejpeg=true"
    title="voyage"
    caption="Et Quelque heures plus tard, Arrivé à destination Au Bout Du Monde."   
    />
    <Photo 
    img="https://images.assetsdelivery.com/compings_v2/sergeyback/sergeyback2401/sergeyback240153791.jpg"
    title="voyage"
    caption="Me Voilà enfin, Freedom"   
    />
    <Photo 
    img="https://images.assetsdelivery.com/compings_v2/dron44/dron442401/dron44240100776.jpg"
    title="voyage"
    caption="Arrivé à destination Au Bout Du Monde"   
    />  
        <Photo 
    img="https://images.assetsdelivery.com/compings_v2/dron44/dron442401/dron44240100776.jpg"
    title="voyage"
    caption="Arrivé à destination Au Bout Du Monde"   
    />  
        <Photo 
    img="https://images.assetsdelivery.com/compings_v2/dron44/dron442401/dron44240100776.jpg"
    title="voyage"
    caption="Arrivé à destination Au Bout Du Monde"   
    />  </div>

 );

};

export default Collection;
