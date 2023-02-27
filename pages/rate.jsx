const Rate = () => {

    return (
        <div className="viewport">
            <div className="container card">
                <div className="row">
                    <div className="col-12 col-md-6 d-flex container align-content-center justify-content-center px-6   ">
                        <h1 className="p-5">Si te has atendido conmigo y te ha gustado mi trabajo, me ayudarias mucho dejando una breve reseña, destacando lo que mas te gustó de mi servicio</h1>
                    </div>
                    <div className="col-12 col-md-6 container d-flex flex-column justify-content-center align-items-center">
                        <form action="" className="d-flex flex-column">
                            <input type="textarea" placeholder="Escribe aca" className="textarea rating" />
                            <button type="submit" className="btn-secondary rating">Calificar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Rate;
