import React from "react";
import './styles.css';

function Footer() {
    return (

        <footer>
            <div className="footer-center">
                <div className="redes-sociais">
                    <a href="https://www.linkedin.com/in/victor-roble/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                    <a href="https://www.instagram.com/roblevictor_/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://github.com/roblevictor" target="_blank"><i className="fa-brands fa-github"></i></a>
                </div>

                <div className="footer-texto">
                    <small>Desenvolvido por Victor Roble</small>
                </div>
            </div>
        </footer>

    );
}

export default Footer; 