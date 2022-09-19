import React from "react";
import logo from './../assest/Asset-2-300x72.jpeg'
import './Nav.css'

function Nav(){
    return(
        <div className='nav navbar navbar-expand-lg bg-light sticky-top bg-ligth fixed-top' id="nav">
        <div className="container-fluid">
            <img src={logo} alt="logo"  className="navbar-brand logo"/>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" >
                <div className="offcanvas-header">
                   <h5 className="offcanvas-title" id="offcanvasNavbarLabel"><img src={logo} alt="logo" className="navbar-brand logo"/></h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                <li className="nav-item">
                <a href="#Inicio" aria-current="page" className='nav-link active' >Home</a>
                </li>
                <li>
                <a href="#sobre-mi" aria-current="page" className='nav-link active'>Información</a>
                </li>
                <li>
                <a href="#skills" aria-current="page" className='nav-link active' >Premios</a>
                </li>
                <li>
                <a href="#proyectos" aria-current="page" className='nav-link active' >Entradas</a>
                </li>
                </ul>
             </div>
            </div>
        </div>
</div>
    )
}

export default Nav




