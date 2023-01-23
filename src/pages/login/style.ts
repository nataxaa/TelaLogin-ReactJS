import styled from "styled-components";
import img from '../../image/1.webp'

export const Container = styled.div`

    display:flex ;
    align-items:center ;
    height:100vh ;
    background-image:url(${img}) ;
    background-position:center ;

    div.cart-login{
        display:flex ;
        flex-direction:column ;
        align-items:center ;     
        margin:0 auto ;
        padding: 50px 15px ;
        width:26rem ;
        border-radius:5px ;
        background-color:#230C31;
        
        .input-group{
            position:relative ;
        }
        .input{
            outline:2px solid var(--border-color) ;
            padding:15px ;
            border-radius:5px ;
            border:none ;
            background-color:transparent ;
            margin-bottom:20px ;
            color:#FFF ;
            width:max-content ;
            width:18rem ;
        }
        .input-label{
            position:absolute ;
            top:0 ;
            left:0 ;
            transform:translate(10px, 10px) ;
            transition:transform .25s ;
            color:#FFF ;
            font-size:16px ;
            
        }
        .input:focus + .input-label,
        .input:valid + .input-label{
            transform: 
            translate(10px, -14px) scale(.8);
            color:#FFF ;
            font-size:20px ;
            padding-inline: 8px;
            background-color:#230C31 ;
            
        }
        .input:is(:focus, :valid){
            outline-color:#9A48D0;
        }

        .link{
            color:red ;
            font-size:14px ;
            margin-bottom:10px ;
        }
        .h1-user{
            margin:0 ;
        }

        button{
            padding:8px 15px;
            background-color:#9A48D0 ;
            border:none ;
            border-radius:5px ;
            color:#FFF ;
            cursor: pointer;
            :hover{
                opacity:0.9 ;
            }
        }

        h1{
            -webkit-text-stroke: 1px var(--border-color);
            color:#9A48D0 ;
            margin-bottom:30px ;
        }
    }
    

`