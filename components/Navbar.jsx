import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


const Navbar = () => {

    const router = useRouter();
    const [topValue, setTopValue] = useState('0');

    useEffect(() => {
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function () {



            var currentScrollPos = window.pageYOffset;

            if (prevScrollpos > currentScrollPos) {
                if (topValue != 0) setTopValue('0');

                console.log(topValue);
            } else {
                if (topValue == 0) setTopValue('-130px');
                console.log(topValue);
            }
            prevScrollpos = currentScrollPos;
        }
    })



    return (
        <>
            <nav className="navbar navbar-expand-lg  nav" style={{ top: topValue }}>
                <div className="container-fluid p-2 d-flex justify-content-between">
                    <Link className="navbar-brand" href="/">NailsByMariangeles</Link>
                    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="col">
                        </div>
                        
                        <div className="col ul-container">
                            <ul className="navbar-nav  mb-2 mb-lg-0">
                                {/* <li className="nav-item dropdown nav-link">
                                    <button className="nav-link dropdown-toggle btn-secondary" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Tools
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li> */}
                                <li className="nav-item">
                                    <Link className="nav-link " aria-current="page" href="/">
                                        <button className={router.pathname === '/' ? "btn-secondary active" : 'btn-secondary'}>Apartar una cita</button>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " aria-current="page" href="/">
                                        <button className={router.pathname === '/' ? "btn-secondary active" : 'btn-secondary'}>Precios</button>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " aria-current="page" href="/about">
                                        <button className={router.pathname === '/about' ? "btn-secondary active" : 'btn-secondary'}>Acerca de mí</button>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar;
