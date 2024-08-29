import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{      
        margin: 0;
        padding: 0;
        /* box-sizing: border-box; */

    }
    * body{
        font-family: Arial;
        background-color: #333;
    }

    .AB {
        max-width: 600px;
        margin: 0 auto;
        background-color: #efefef;
        padding: 10px 10px;
        border-radius: 30px;
    }

    *, button, input {
        box-sizing: border-box;
    }
    .Com{
        background-color: #5cb85c;
        border-radius: 5px;
        border: none;
        padding: 5px 10px;
        cursor: pointer;
        opacity: 0.8;
    }

    .Del{
        background-color: #d9534f;
        border-radius: 5px;
        border: none;
        padding: 5px 10px;
        cursor: pointer;
        opacity: 0.8;
        transition: 0.3s;

    }

    .Com:hover{
        opacity: 1;
    }

    .Del:hover{
        opacity: 1;
    }
    
    * h1 {
        /* margin-top: 8px; */
        text-align: center; 
    }

    * p {
        margin: 10px 0;
        width: 100%;
    }
    
`;
