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

            } else {
                if (topValue == 0) setTopValue('-130px');
            }
            prevScrollpos = currentScrollPos;
        }
    })



    return (
        <>
            <nav className="navbar navbar-expand-md  nav" style={{ top: topValue }}>
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
                           
                                <li className="nav-item">
                                    <Link className="nav-link " aria-current="page" href="/appoint">
                                        <button className={router.pathname === '/appoint' ? "btn-secondary active" : 'btn-secondary'}>Agendar una cita</button>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " aria-current="page" href="/rate">
                                        <button className={router.pathname === '/rate' ? "btn-secondary active" : 'btn-secondary'}>Dejar una Reseña</button>
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
