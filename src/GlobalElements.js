import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
    :root {
        --primary-font-type: "Trebuchet MS";
        --h1-font-size:32px;
        --h2-font-size:28px;
        --h3-font-size:25px;
        --h4-font-size:22px;
        --h5-font-size:18px;
        --h6-font-size:16px;
        --paragraph:21px;
        --small-margin: 15px;
        --medium-margin:30px;
        --large-margin:45px;
        --small-padding: 10px;
        --medium-padding:15px;
        --large-padding:30px;
    }

    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family: var(--primary-font-type);
    }    
`;