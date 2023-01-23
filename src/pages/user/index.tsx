import { Container } from "../login/style";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

export function User(){

    useEffect(()=>{
        Aos.init({duration:1700})
    }, [])

    return(
        <Container>
            <div data-aos='fade-down' className="cart-login">
                <h1 className="h1-user">Usuario Ativo.</h1>
            </div>
        </Container>
    )
}