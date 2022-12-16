import Styled from "styled-components";

export const Body = Styled.div`
display:flex;
justify-content:space-between;
padding: 0.6875rem;
border: 2px solid hsl(217, 16%, 45%);
border-radius: 5px;
max-width:  43.75rem;
margin:0 auto 6rem auto;
@media(min-width:62em){
    margin:0 auto 3rem auto;
}
`;

export const Container = Styled.div`
align-self:center;
color:white;
`;

export const Score = Styled.div`
background-color:white;
border-radius:5px;
padding:0.75rem 1.5rem;
text-align:center;

@media(min-width:87.5em){
    padding:1.375rem 3.125rem;
}
`;

export const Heading = Styled.h1`
font-size:0.9375rem;
line-height:0.8;

@media(min-width:62em){
    font-size: 1.2rem;
}

@media(min-width:87.5em){
    font-size:1.75rem;
}
`;

export const SubHeading = Styled.h3`
font-size: 0.5rem;
letter-spacing: .05rem;
color:hsl(229, 64%, 46%);
@media(min-width:87.5em){
    font-size:0.75rem;
}
`;

export const Total = Styled.h1`
font-size: 1.75rem;
color:hsl(229, 25%, 31%);
@media(min-width:87.5em){
    font-size:2.8125rem;
}
`;
