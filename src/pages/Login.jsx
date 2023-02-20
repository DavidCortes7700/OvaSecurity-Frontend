import React, {useState} from "react";
import logo from "images/escudoJDC.png";
import {Link} from "react-router-dom";


export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email);
    }

    return(
        <div className="auth-form-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <img className="logo-jdc" src={logo}/>
                <h1 className="title-ova">OVA Security</h1>
                <label className="subtitle-ova">Objeto virtual de aprendizaje sobre seguridad informática</label>
                <label htmlFor="email">Correo</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="tuCorreo@jdc.edu.co" id="email" name="email"/>
                <label htmlFor="password">Contraseña</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*******************" id="password" name="password"/>
                <button type="submit">Iniciar sesión</button>
                <Link to='/password-recovery'>
                    <button className="link-btn" >¿Olvidaste tu contraseña?</button>
                </Link>
                
            </form>
            <Link to='/register'>
                <button className="link-btn" >¿No tienes una cuenta? Regístrate</button>
            </Link>
            
        </div>
    )
}

export default Login;