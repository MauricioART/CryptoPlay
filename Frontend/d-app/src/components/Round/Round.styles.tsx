import Styled, { keyframes, css } from "styled-components";

const fadeIn = keyframes`
0%{
    opacity:0;
}
50%{
    opacity:0;
}
100%{
    opacity:1;
}
`;
const fadeOut = keyframes`
0%{
    opacity:1;
}
50%{
    opacity:0;
}
100%{
    opacity:0;
}
`;
const transitionRight = keyframes`
    0%{
        transform: translatex(1rem)
    }
    100%{
        transform:translatex(8rem)
    }
`;
const transitionLeft = keyframes`
0%{
        transform: translatex(-1rem)
    }
    100%{
        transform:translatex(-8rem)
    }
`;

const complexCSS = css`
  &:nth-child(1) {
    animation-name: ${transitionLeft};
  }
  &:nth-child(2) {
    animation-name: ${transitionRight};
  }
`;
export const Body = Styled.div`
width:80%;
margin:auto;
position:relative;
`;

export const Flex = Styled.div`
    display:flex;
    justify-content:space-around;
    @media(min-width:62em){
        justify-content:center;
    }
`;

export const Container = Styled.div<{ animate: boolean }>`
    margin-bottom:2rem;
    animation-duration: 2s;
    animation-iteration-count: linear;
    animation-fill-mode: forwards;
padding:0 0.5rem;
@media(min-width:62em){
    &:nth-child(1) {
    transform:translatex(-1rem)
  }
  &:nth-child(2) {
    transform:translatex(1rem)
  }
    ${(props: any) => (props.animate ? complexCSS : "")}
}
`;

export const OutComeContainer = Styled.div`
opacity:0;
animation-duration: 2s;
animation-iteration-count: linear;
animation-fill-mode: forwards;
animation-name:${fadeIn};
@media(max-width:61.999em){
    margin-bottom:1rem;
}
@media(min-width:62em){
    position:absolute;
    top:5rem;
}
`;

export const OutCome = Styled.h1`
margin-bottom:1rem;
text-align:center;
font-size:2.5rem;
color:white;
`;

export const Button = Styled.div`
padding: 1.25rem 3.5rem;
background-color:white;
border-radius:5px;
color:hsl(237, 49%, 15%);
font-size: 0.875rem;
letter-spacing: 0.1rem;
cursor:pointer;

&:hover{
    color:hsl(349, 71%, 52%);
}
`;

export const Animate = Styled.div`
 position:relative;
 >div{
    animation-duration: 2s;
    animation-iteration-count: linear;
    animation-fill-mode: forwards;
}
 >div:nth-child(1){
    animation-name: ${fadeOut};
 }
 >div:nth-child(2){
    animation-name: ${fadeIn};
 }
`;

export const Heading = Styled.h3`
color:white;
text-align:center;
margin-bottom: 2rem;
@media(max-width:28em){
    min-height:2.8125rem;
}
`;

export const PlaceHolder = Styled.div`
    padding:3rem;
    width:6rem;
    height:6rem;
    border-radius:50%;
    background-color:hsl(237, 49%, 15%);
    position:absolute;
    left:1rem;
    top:1rem;
    z-index:2;

    @media(min-width:62em){
        width:10rem;
        height:10rem;
    }
`;
