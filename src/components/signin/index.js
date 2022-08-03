import React, { useState, useEffect, } from "react";
import { useDispatch } from "react-redux";
import { loginStart } from "../../store/modules/usuario/actions";
import './styles.css';
import {  useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom';



function SignIn() {
    const auth = useSelector(({usuario})=> usuario);
    let navigate = useNavigate();
//dados de login
const [credentials, setCredentials]= useState({
    email: "",
    password: ""
});
//inicia o dispatch
const dispatch = useDispatch();
//atualiza os dados de login
    const handleChange = (e) => {
        //captura os d
        setCredentials({...credentials, [e.target.name]: e.target.value});
    }
//dispara o redux
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('login' +credentials);
        dispatch(loginStart(credentials));
    }

    useEffect(()=>{
        if(auth.currentUser){
            navigate("/painel");
        }
    }, [auth]);
//atualização

    return (
        <div className="dropdown-background">
            <div class="dropdown-content" id="loginDropdown">
                <div className="login-area">
                    <div className="form-area">
                        <form onSubmit={handleSubmit}>
                            <div className="form-top">
                                <div className="input-area">
                                    <label for="email">E-mail</label>
                                    <input type="email" name="email" id="email" 
                                    value={credentials.email}
                                    onChange={handleChange}
                                    />
                                </div>
                                <div className="input-area">
                                    <label for="password">Senha</label>
                                    <input type="password" name="password" id="password" 
                                    value={credentials.password}
                                    onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="form-bottom">
                                <div className="form-text">
                                    <a href="#" target="_blank">Esqueceu a senha?</a>
                                </div>

                                <div className="form-btn-area">
                                    <button className="btn" type="submit">Entrar</button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;


