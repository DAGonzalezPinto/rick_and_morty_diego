import style from "./Header.module.css";

const Header = () =>{
    return(
        <div className={style.div}>
        <h2 className={style.texto}>Here you can search Rick And Morty characters by their ID and see their details or information on the cards!</h2>
        </div>
    )
}
export default Header;