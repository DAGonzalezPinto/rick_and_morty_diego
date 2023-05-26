import style from "./Form.module.css";
import { useState } from "react";
import validation from "./Validation.js"

const Form = ({ login }) => {

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setUserData({
          ...userData,
          [event.target.name]: event.target.value
        });
        setErrors(validation({
          ...userData,
          [event.target.name]: event.target.value
        }));
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
      }

    return(
        <form onSubmit={handleSubmit} className={style.container}>
            <div >
                <div>
                    <img className={style.tamañoLogo} src="https://i.ibb.co/zr083QB/rick-and-morty-portal-shoes-white-clothing-zavvi-23.png" alt="" />
                </div>
                <div className={style.form}>
            <div >
            <label htmlFor="email"></label>
            <input className={style.inputs} id="email "type="email" name="email" value={userData.email} placeholder="Ingrese aquí su correo electrónico" onChange={handleChange} />
            {errors.email && <div className={style.errorsContainer}><p className={style.errors}>{errors.email}</p></div>}
            </div>
            <div className={style.inputDiv}/>
            <div >
            <label htmlFor="password"></label>
            <input className={style.inputs} id="password" type="text" name="password" value={userData.password} placeholder="Ingrese aquí su contraseña" onChange={handleChange} />
            {errors.password && <div className={style.errorsContainer}><p className={style.errors}>{errors.password}</p></div>}
            </div>
            <div className={style.inputDiv}>
                <button className={style.button}>Sumbit</button>
                </div>
            </div>
            </div>
        </form>
    )
}
export default Form;