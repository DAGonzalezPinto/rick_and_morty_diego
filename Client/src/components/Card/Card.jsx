import style from "./Card.module.css"
import { NavLink } from "react-router-dom";
import { addFav, removeFav } from "../../Redux/actions";
import { connect } from "react-redux";
import { useState } from "react";

function Card({name, image, onClose, id, addFav, removeFav}) {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () =>{
      if(isFav){
         setIsFav(false);
         removeFav(id);
      }
      else {
         setIsFav(true);
         addFav({ name, image, onClose, id })
      }
   }
   return (
      <div className={style.container}>
         {
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
}
         <div className={style.buttonContainer}>
        <button onClick={() => onClose(id)}>X</button>
            </div>

            <hr className={style.hr}/>

            <NavLink to={`/detail/${id}`} ><div>
               <img className={style.img} src={image} alt='' />
         </div>
         </NavLink>

         <hr className={style.hr}/>

         <div>
         <NavLink to={`/detail/${id}`} className={style.dataContainer}>
            <h2> - {name} - </h2>
            <h4> ??? </h4>
            <h5> Click here to see Details!</h5>
            </NavLink>
         </div>

         <hr className={style.hr}/>

      </div>
   );
}

const mapDispatchToProps = (dispatch) =>{
   return{
      addFav: (character) => { dispatch(addFav(character)) },
      removeFav: (id) =>{ dispatch(removeFav(id)) }
   }
}

export default connect(
   null,
   mapDispatchToProps
)(Card);
