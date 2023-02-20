import React, {useState} from "react"
import logo from "images/escudoJDC.png";
import {Link} from "react-router-dom";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email);
    }

    return(
        <div className="auth-form-container">
            <form className="register-form" onSubmit={handleSubmit}>
                <img className="logo-jdc" src={logo}/>
                <h1 className="title-ova">OVA Security</h1>
                <label className="subtitle-ova">Objeto virtual de aprendizaje sobre seguridad informática</label>
                <label>Nombre Completo</label>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Tu nombre completo" id="name" name="name"/>
                <label htmlFor="email">Correo</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="tuCorreo@jdc.edu.co" id="email" name="email"/>
                <label htmlFor="password">Contraseña</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*******************" id="password" name="password"/>
                <Link to='/'>
                <button type="submit">Registrarte</button>
                </Link>
            </form>
            <Link to='/'>
              <button className="link-btn" >¿Tienes una cuenta? Inicia sesión</button>
            </Link>
        </div>
    )
}
