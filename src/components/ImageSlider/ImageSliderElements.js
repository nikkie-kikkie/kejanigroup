import styled from "styled-components";
import {FaArrowAltCircleLeft,FaArrowAltCircleRight } from "react-icons/fa"

export const SliderContainer = styled.div`
    position:relative;
    height:100%;
    width:100%;

    .slide-active{
        height:100%;
        width:100%;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:space-evenly;
        line-height:30px;
        opacity:1;
        transition:1s ease-in;
        text-align:center;
        
    }
    .slide{
        opacity:0;
        transition:1s ease-in;
    }
    img{
        width:200px;
        height:200px
    }
`;

export const LeftArrow = styled(FaArrowAltCircleLeft)`
    position:absolute;
    left:20px;
    top:50%;
    transform:translate(-50%,-20px);
    font-size:30px;
    cursor:pointer;
    user-select:none;
    z-index:10;
`;
export const RightArrow = styled(FaArrowAltCircleRight)`
    position:absolute;
    right:20px;
    top:50%;
    transform:translate(-50%,-20px);
    font-size:30px;
    cursor:pointer;
    user-select:none;
    z-index:10;
`;
