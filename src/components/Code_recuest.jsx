import React, {useState} from "react";
import logo from "../images/cheque.png";
import hlogo from "../images/horizontal-fondo-claro.png";

export const Code_recuest = (props) =>{
    const [code, setCode] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(code);
    }

    return(
        <>
         <div className="banner">
            <img className="hlogo-jdc" src={hlogo}/>
            <label className="title-banner">OVA Security</label>
        </div>
        <div className="auth-form-container">
            <form className="register-form" onSubmit={handleSubmit}>
                <img className="logo-jdc" src={logo}/>
                <label className="subtitle-ova">¿Tienes un código de recuperación?</label>
                <label htmlFor="email">Se ha enviado un código a tu correo con el cual puedes recuperar tu cuenta.</label>
                <input value={code} onChange={(e) => setCode(e.target.value)} type="email" placeholder="Código de recuperación" id="code" name="code"/>
                <button type="submit">Enviar código de recuperación</button>
            </form>
            <button className="link-btn" onClick={ () => props.onFormSwitch('login')}>¿Tienes una cuenta? Inicia sesión</button>
        </div>
        </>
    )
}

