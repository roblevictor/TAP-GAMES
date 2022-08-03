import React, {useState} from "react";
import Footer from '../../components/footer';
import '/style.css';
import {useDispatch, useSelector} from 'react-redux';
import {logOut} from '../../store/modules/usuario/actions';
import signup from '../../components/signup';
import {useNavigate} from 'react-router-dom';

function Header(props){
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const user = useSelector(({usuario})=> usuario.currentUser);
    return(
        <>
        <div class='header'>
            <nav>
                <div class='user-area'>
                    <div class='user-nick'>{user.nick}</div>
                    <div class='user-ranking'>{`#${user.ranking}`}</div>
                </div>
            </nav>
        </div>
        <ul>

            <li>
                <a onClick={()=> props.onClickPerfil()}>
                    <img src={`${user.avatar}`} alt=""/>
                </a>
            </li>
            <li>
                <a onClick={()=> {dispatch(logOut()); navigate("/");}}>
                    <i class="fa fa-sign-out"></i>
                </a>
            </li>
        </ul>
        
        </>
    )
}

function Banner(props){
    return(
        <>
        <div class="banner">
            <div class="banner-left">

            </div>
            <div class="banner-right">

            </div>
        </div>
        </>
    )
}

function Painel() {
    const [openPerfil, setOpenPerfil]= useState(false);
    function handlePerfil(){
        setOpenPerfil(!openPerfil);
    }
    return (
        <>
           <Header onClickPerfil={handlePerfil}/>
           <Banner openPerfil={openPerfil} onClickCancel={handlePerfil}/>
           <Footer />
        </>
    )
}

export default Painel;