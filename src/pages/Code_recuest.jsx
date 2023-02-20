import React, {useState} from "react";
import logo from "images/cheque.png";
import hlogo from "images/horizontal-fondo-claro.png";
import {Link} from "react-router-dom";


export const Code_recuest = (props) => {
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
                <label>Se ha enviado un código a tu correo con el cual puedes recuperar tu cuenta.</label>
                <label htmlFor="code">Código</label>
                <input value={code} onChange={(e) => setCode(e.target.value)} type="email" placeholder="Código de recuperación" id="code" name="code"/>
                <label htmlFor="newPass">Ingresa tu Contraseña nueva</label>
                <input value={code} onChange={(e) => setCode(e.target.value)} type="email" placeholder="**********" id="code" name="code"/>
                <label htmlFor="repeatNewPass">Repite tu contraseña nueva</label>
                <input value={code} onChange={(e) => setCode(e.target.value)} type="email" placeholder="**********" id="code" name="code"/>
                <Link to='/'>
                <button type="submit">Cambiar contraseña</button>
                </Link>
            </form>
            <Link to='/'>
                <button className="link-btn" >¿Tienes una cuenta? Inicia sesión</button>
            </Link>
        </div>
        </>
    )
}

