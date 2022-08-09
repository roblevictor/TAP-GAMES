import React, { useState } from "react";
import './styles.css';
import {useDispatch} from 'react-redux';
import { registerStart } from "../../store/modules/usuario/actions";



function Signup(props) {
    const dispatch = useDispatch();

    const [credentials, setCredentials] = useState ({
        nome: '',
        nick: '',
        email: '',
        password: ''
    });

    const handleChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value});
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log('aqui'+credentials);
        dispatch(registerStart(credentials));
    }


    return (
        <div className="signup-area">
            <div class="login-area">
                <div class="form-area">
                    <form onSubmit={handleSubmit} method="post">
                        <div class="form-content">
                            <div class="input-area">
                                <label for="nome">Nome</label>
                                <input type="text" name="nome" id="nome" 
                                    value={credentials.nome}
                                    onChange={handleChange}
                                />
                            </div>

                            <div class="input-area">
                                <label for="nick">Nick</label>
                                <input type="text" name="nick" id="nick" 
                                 value={credentials.nick}
                                 onChange={handleChange}
                                 />
                            </div>

                            <div class="input-area">
                                <label for="email">E-mail</label>
                                <input type="email" name="email" id="email" 
                                     value={credentials.email}
                                     onChange={handleChange}                                
                                />
                            </div>
                            <div class="input-area">
                                <label for="password">Senha</label>
                                <input type="password" name="password" id="password" 
                                     value={credentials.password}
                                     onChange={handleChange}
                                />
                            </div>

                        </div>
                        <div class="form-text">
                        </div>
                        <div class="form-btn-area">
                            <button class="btn" type="submit">CADASTRAR</button>
                            <button class="btn" type="button" onClick={() => props.onClickCancel()}>CANCELAR</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default Signup;


