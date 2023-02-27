import Link from "next/link";
import { useSelector } from "react-redux";

const appoint = () => {

    const authenticated = useSelector(state=>state.clientReducer.clientAuthenticated);
    authenticated.name && console.log('hola');
    
    return (
        <div className="viewport">

            <div className="container card p-5">
                <h1 className="text-center p-3">Agendar cita</h1>
                {authenticated.name? 
                <h2>aqui podras apartar la cita</h2>    
                :
                <div className="register-request container align-items-center justify-content-center d-flex flex-wrap flex-column">
                    <h3 className="p-5">Debes registrarte para poder apartar una cita, te tomara solo 1 minuto</h3>
                    <Link className="btn-secondary p-3" href='client/register'>Registrarse </Link>
                </div>
            }
            </div>
        </div>
    )
};

export default appoint;
