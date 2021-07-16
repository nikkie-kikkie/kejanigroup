import styled from "styled-components";
export const MainContainer = styled.div`
    width:100%;
    min-height:100vh;
    display:flex;
    align-items:center;
    justify-content:space-around;
    flex-direction:column;
    

    h1{
        font-size: var(--h1-font-size);
        margin-bottom:var(--small-margin);
    }
    h2{
        font-size:var(--h2-font-size);
        margin-bottom:var(--small-margin);
    }
    p{
        font-size:var(--paragraph);
        margin-top:var(--small-margin);
    }
`;
export const FormContainer = styled.form`
    min-width:65%;
    min-height:60vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;
    padding:var(--medium-padding);
    background-color:rgb(233,233,233);


    button{
        padding:var(--small-padding) var(--medium-padding);
        border:none;
        outline:none;
        cursor:pointer;
        font-size:var(--h5-font-size);
        width:50%;
        background-color:rgb(36, 1, 36);
        color:white;
        border-radius:10px;
    }
    
`;
export const InputContainer = styled.div`
    font-size:var(--h4-font-size);
    width:100%;
    padding:var(--medium-padding);
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-direction:row;
    @media only screen and (max-width: 650px) and (min-width: 350px) {
        flex-direction:column;
    }


    input,textarea{
        width:60%;
        border:none;
        outline:none;
        border:1px solid black;

        @media only screen and (max-width: 650px) and (min-width: 350px) {
            width:100%;
        }
    }
    input{
        text-align:center;
        border-radius:10px;
        font-size:var(--paragraph);
        height:40px;
        @media only screen and (max-width: 650px) and (min-width: 350px) {
            font-size:18px;
        }
    }
`;