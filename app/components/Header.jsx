"use client"
import React from 'react'
import { useEffect } from "react";
import Image from 'next/image';
import logoImage from "/public/logo.png"
const Header = () => {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    useEffect(() => {
        // Function to add a class when the page is scrolled
        function handleScroll() {
            const nav = document.querySelector('header');
            if (window.scrollY > 20) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        }

        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg fixed-top">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <Image
                                src={logoImage}
                                alt="Paramarsh Logo"
                                width={205}
                                height={46}
                                priority={true}
                            />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="#about">About Paramarsh</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#expertise">Our Expertise</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#products">Our Products</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#projects">Our Recent Projects</a>
                                </li>   <li className="nav-item">
                                    <a className="nav-link" href="#clients">Our Clients</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#works">Work For Us</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header