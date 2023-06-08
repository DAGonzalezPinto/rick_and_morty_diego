import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from  "react-router-dom";
import style from "./Nav.module.css";

const Nav = ({ onSearch }) =>{
    return(
        <nav className={style.container}>
            <div className={style.sep}>

                <div className={style.sep}>

                    <button className={style.buttons}>
                <NavLink to= "/about" className={style.buttonText}>About</NavLink>
            </button>

            <div className={style.div}></div>

            <button className={style.buttons}>
                <NavLink to= "/home" className={style.buttonText}>Home</NavLink>
            </button>

            <div className={style.div}></div>

            <button className={style.buttons}>
                <NavLink to= "/favorites" className={style.buttonText}>Favorites</NavLink>
            </button>

            <div className={style.div}></div>

            </div>
            <SearchBar onSearch={onSearch} />
            </div>

            <div className={style.divLogOut}>

            <button className={style.logOut}>
                <NavLink to= "/" className={style.buttonText}>Log Out</NavLink>
            </button>

            </div>
        </nav>
    )
}
export default Nav;