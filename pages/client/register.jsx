import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

const register = () => {
    const router = useRouter()
    const [clientInfo, setClientInfo] = useState({name: '', password: '', phone: '', email: ''});
    const {name, password, phone, email} =clientInfo;
    const handleChange = (e) => {
        setClientInfo({...clientInfo, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, password, phone, email);
        axios.post('localhost:3000/api/client/register', {name,password,phone,email})
        router.push("/");
    }
    return (
        <div className="viewport">
            <div className="card container d-flex flex-column justify-content-center align-items-center">
                <h3 className="mt-5 p-0">Registro de cliente</h3>

                <section class="section_form">
                    <form id="consultation-form" class="feed-form" onSubmit={handleSubmit}>
                        <input required="" placeholder="Name" name="name" type="text" onChange={handleChange}/>
                        <input required="" placeholder="Password" name="password" type="text" onChange={handleChange}/>
                        <input required="" placeholder="Phone number" name="phone" type="text"onChange={handleChange}/>
                        <input required="" placeholder="E-mail" name="email" type="email" onChange={handleChange}/>
                        <button type="submit" class="btn-secondary py-3">Register</button>
                    </form>
                </section>
            </div>

        </div>
    )
};

export default register;
