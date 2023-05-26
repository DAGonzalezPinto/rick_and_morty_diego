import style from "./About.module.css";
import { NavLink } from "react-router-dom";  


const About = () =>{
    return(
        <div className={style.container}>
            <NavLink to="/home">
                <button className={style.button}>Back to Home</button>
                </NavLink>
            <div className={style.text}>
            <h1>About me</h1>
            <p>...</p>
                </div> 
        </div>
    )
}

export default About;