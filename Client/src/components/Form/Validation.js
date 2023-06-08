const validation = (userData) => {

    const errors = {};

    if(!/\S+@\S+\.\S+/.test(userData.email)){ 
        errors.email = "Ingresa una dirección de correo electrónico valida.";
    }
    if(!userData.email){
        errors.email = "Ingresa una dirección de correo electrónico.";
    }
    if(userData.email.length > 35){
        errors.email = "Tu correo electrónico no puede tener más de 35 caracteres.";
    }
    if(!/^(?=.*\d).+$/.test(userData.password)){
        errors.password = "Tu contraseña debe contener almenos 1 número.";
    }
    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password = "Tu contraseña debe contener entre 6 y 10 caracteres.";
    }
    return errors;
} 
export default validation;