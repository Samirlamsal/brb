import React from 'react';
import { Link } from 'react-router-dom';
import * as ReactBootStrap from "react-bootstrap";


function Navig() {
    return (
        <>
            <div className="navigation">
                <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="transparent">
                    <ReactBootStrap.Navbar.Brand href="#home" style={{ 'font-family': 'inter', 'padding': '15px 15px' }}>LoGo</ReactBootStrap.Navbar.Brand>
                    <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                        <ReactBootStrap.Nav className="mr-auto">
                        </ReactBootStrap.Nav>
                        <ReactBootStrap.Nav style={{ 'text-align': 'right', 'padding': '35px 0', 'font-size': '14px', 'font-weight': 'bold' }}>
                            <ReactBootStrap.Nav.Link href="#projects" style={{ 'font-family': 'inter', 'padding': '0 35px' }}>PROJECTS</ReactBootStrap.Nav.Link>
                            <ReactBootStrap.Nav.Link href="#pricing" style={{ 'font-family': 'inter', 'padding': '0 35px' }}>PRICING</ReactBootStrap.Nav.Link>
                            <ReactBootStrap.Nav.Link href="#about" style={{ 'font-family': 'inter', 'padding': '0 35px' }}>ABOUT</ReactBootStrap.Nav.Link>
                            <ReactBootStrap.Nav.Link href="#contact" style={{ 'font-family': 'inter', 'padding': '0 35px' }}>CONTACT</ReactBootStrap.Nav.Link>
                        </ReactBootStrap.Nav>
                    </ReactBootStrap.Navbar.Collapse>
                </ReactBootStrap.Navbar>

            </div>
        </>
    )
}

export default Navig;












