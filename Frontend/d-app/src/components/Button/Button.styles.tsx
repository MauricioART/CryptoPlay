import Styled, { keyframes, css } from "styled-components";


const winner = keyframes`
  0% {
    box-shadow: 0 0 0 .7rem rgba(255,255,255, 0.2);
  }
  100% {
    box-shadow: 0 0 0 8rem rgba(255,255,255, 0);
  }
`;

const CSS = css`
  animation: ${winner} 4500ms infinite;
`;
export const Wrap = Styled.div`
   cursor:pointer;
   display:inline-block;
   border-radius:50%;
   position:relative;
   z-index:1;
   
`;

export const Animate = Styled.div<{xl?: boolean; animate?: boolean }>`
width: 8rem;
height: 8rem;
position:absolute;
border-radius:50%;
box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
	transform: scale(1);
   ${(props: any) => props.animate && CSS};
  &::before,
&::after{
  content:"";
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  border-radius: 50%;
  animation:inherit;
  animation-delay:1500ms;
}

&::after{
  animation-delay:3000ms
}

@media(min-width:62em){
  ${(props: any) => {
    if (props.xl) {
      return {
        width: "12rem;",
        height: "12rem;",
      };
    } else return "";
  }}
`;
export const Outer = Styled.div<{ xl?: boolean }>`
width: 8rem;
height: 8rem;
position:relative;
border-radius:50%;
display:flex;
align-content:center;
align-items:center;
justify-content:space-around;
background-color:${(props: any) => props.color};
box-shadow:inset 0px -8px 1px -1px rgb(0 0 0 / 25%);
@media(min-width:62em){
  ${(props: any) => {
    if (props.xl) {
      return {
        width: "12rem;",
        height: "12rem;",
      };
    } else return "";
  }}
}

`;
interface InnerProps {
  temp: boolean;
  xl?: boolean;
}
export const Inner = Styled.div<InnerProps>`
padding: 3rem;  
width: 6rem;
height: 6rem;
border-radius:50%;
display:flex;
align-content:center;
align-items:center;
justify-content:space-around;
background-color:${(props: any) => (props.placeholder ? "black" : "white")};
box-shadow:inset 0px 12px 0px -3px rgb(0 0 0 / 10%);
@media(min-width:62em){
${(props: any) => {
  if (props.xl) {
    return {
      width: "10rem;",
      height: "10rem;",
    };
  } else return "";
}}}
`;
