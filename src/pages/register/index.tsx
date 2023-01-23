import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/cart";
import { Container } from "../login/style";

import Aos from 'aos'
import 'aos/dist/aos.css'

export function Register(){

    const [email, setEmail] =  useState<string>()
    const [password, setPassword] = useState<string>()
    const [password2, setPassword2] = useState<string>()
    const {AddUser}:any = useContext(CartContext)

    useEffect(()=>{
        Aos.init({duration:1700})
    }, [])

    function handleRegister(){
        if(!email){
            alert("Digite o Email.")
            return
        }else if(password != password2){
            alert("Senhas Diferentes.")
            return
        }
        AddUser(email, password)
    }

    return(
        <Container>
            <div data-aos='fade-down' className="cart-login">                
                <h1>Registro.</h1>
                <div className="input-group">
                    <input 
                        id="email" 
                        type="text" 
                        required className="input" 
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        />
                    <label  htmlFor="email" className="input-label">Email</label>
                </div>
                <div className="input-group">
                    <input 
                        id="email" 
                        type="password" 
                        required className="input" 
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        />
                    <label  htmlFor="email" className="input-label">Senha</label>
                </div>
                <div className="input-group">
                    <input 
                        id="email" 
                        type="password" 
                        required className="input" 
                        value={password2}
                        onChange={(e)=>setPassword2(e.target.value)}
                        />
                    <label  htmlFor="email" className="input-label">Repita sua senha</label>
                </div>
                <button onClick={handleRegister}>Cadastrar</button>
            </div>
        </Container>
    )
}