import styled from "styled-components";

export const ModalBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  @media (min-width: 62em) {
    background-color: rgba(0, 0, 0, 0.5);
  }
  z-index: 2;
`;
export const Body = styled.div`
  height: 100vh;
  background-color: white;
  z-index: 3;
  @media (min-width: 62em) {
    height: auto;
    width: 25rem;
    border-radius: 5px;
    padding: 2.375rem 2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 1;
  }
`;
export const Heading = styled.h1`
  color: hsl(229, 25%, 31%);
  padding-top: 13.3vh;
  margin-bottom: 15.3vh;
  text-align: center;

  @media (min-width: 62em) {
    padding-top: 0;
    margin-bottom: 0;
  }
`;
export const HeadingContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  @media (min-width: 62em) {
    justify-content: space-between;
    align-content: center;
    align-items: center;
    position: relative;
    margin-bottom: 3rem;
  }
`;
export const Image = styled.img`
  height: 36vh;
  max-height: 17rem;
  display: block;
  margin: 0 auto 32vh auto;
  @media (min-width: 62em) {
    height: auto;
    max-height: none;
    width: 19rem;
    margin: auto;
  }
`;

const Cross = styled.div`
  width: 32px;
  height: 32px;
  opacity: 0.3;
  position: relative;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  &:before,
  &:after {
    position: absolute;
    left: 15px;
    content: " ";
    height: 33px;
    width: 2px;
    background-color: #333;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

export const CrossMobile = styled(Cross)`
  position: absolute;
  bottom: 8vh;
  left: 50%;
  transform: translatex(-50%);
  @media (min-width: 62em) {
    display: none;
  }
`;

export const CrossDesktop = styled(Cross)`
  display: none;

  @media (min-width: 62em) {
    display: block;
  }
`;
