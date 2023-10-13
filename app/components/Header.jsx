"use client"
import classnames from 'classnames';
import { useEffect, useState } from "react";
import Image from 'next/image';
import logoDark from "/public/logo.svg"
import logoLight from "/public/logo-white.svg"
import Link from 'next/link';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const scroll = classnames('mainHeader', {
        'scrolled': scrolled,
    })
    const logoImage = scrolled ? logoDark : logoLight;
    return (
        <>
            <header className={scroll}>
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
                                    <Link className="nav-link" href="#about">About </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="#expertise"> Expertise</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="#products"> Products</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="#projects"> Projects</Link>
                                </li>   <li className="nav-item">
                                    <Link className="nav-link" href="#clients"> Clients</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="#works">Career</Link>
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
