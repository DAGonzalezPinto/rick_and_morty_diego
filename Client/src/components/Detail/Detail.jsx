import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import style from "./Detail.module.css";

const Detail = () =>{

    const [character, setCharacter] = useState({});
    const { detailId } = useParams();

    useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${detailId}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [detailId]);

    return(
        <div className={style.container}>
                <NavLink to="/home">
                <button className={style.button}>Back to Home</button>
                </NavLink>
            <div className={style.div}>
            <div className={style.data}><h1 className={style.text}>Details of {character.name}</h1></div>
            <hr />
            <div className={style.data}><h2 className={style.text}>Status: {character.status}</h2></div>
            <hr />
            <div className={style.data}><h2 className={style.text}>Specie: {character.species}</h2></div>
            <hr />
            <div className={style.data}><h2 className={style.text}>Gender: {character.gender}</h2></div>
            <hr />
            {character.origin && <div className={style.data}><h2 className={style.text}>Origin: {character.origin.name}</h2></div>}
            <div></div>
            <img src={character.image} alt={character.name} className={style.img}/>
            </div>
        </div>
    )
}

export default Detail;