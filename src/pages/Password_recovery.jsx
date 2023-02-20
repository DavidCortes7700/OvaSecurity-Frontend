import React, { useState } from "react";
import {Link} from "react-router-dom";
import logo from "images/candado.png";
import hlogo from "images/horizontal-fondo-claro.png";
import { useNavigate } from 'react-router-dom';

export const Password_recovery = (props) =>{
    const [email, setEmail] = useState('');
    let navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email);
        navigate("/Code_recuest.jsx");
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
                <label className="subtitle-ova">¿Tienes problemas para iniciar sesión?</label>
                <label htmlFor="email">Ingresa tu correo electrónico y te enviaremos un código para que recuperes el acceso a tu cuenta.</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="tuCorreo@jdc.edu.co" id="email" name="email"/>
                <Link to='/code-recuest'>
                    <button type="submit">Enviar código de recuperación</button>
                </Link>
            </form>
            <Link to='/'>
                <button className="link-btn" >¿Tienes una cuenta? Inicia sesión</button>
            </Link>
        </div>
        </>
    )
}