import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => 
  <footer className="page-footer font-small bg-dark text-white mt-5 pt-4">
    <div className="container-fluid  text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <Link className="text-decoration-none text-reset" to="/"><h4>Местечко</h4></Link>
                <p>Glad to see you here</p>
            </div>
            <div className="col-md-3 mb-md-0 mb-0">
                <div className="text-start">
                <h5 >Компания</h5>
                <ul className="list-unstyled text-decoration-none text-reset">
                    <li ><Link className="text-decoration-none text-reset" to="/contacts">Контакты</Link></li>
                    <li><Link className="text-decoration-none text-reset" to="payment">Оплата</Link></li>
                    <li><Link className="text-decoration-none text-reset" to="/help">Помощь</Link></li>
                </ul>
                </div>
            </div>
            <div className="col-md-3 mb-md-0 mb-0">
                <ul className="list-unstyled text-start">
                    <li><Link className="text-decoration-none text-reset" to="terms_of_use">Условия пользования</Link></li>
                    <li><Link className="text-decoration-none text-reset" to="/privacy_policy">Политика конфиденциальности</Link></li>
                    <li><Link className="text-decoration-none text-reset" to="/blog">Блог</Link></li>
                    <li><Link className="text-decoration-none text-reset" to="/vacancies">Работа</Link></li>
                </ul>
            </div>
        </div>
    </div>
    <div className="footer-copyright text-center pt-1 pb-3">Местечко © 2022 Copyright
    </div>
</footer>

export default Footer;