import styled from "styled-components";

export const Body = styled.div`
  position: static;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  padding: 1.875rem;
  background-image: radial-gradient(
    circle at top,
    hsl(214, 47%, 23%),
    hsl(237, 49%, 15%)
  );
  background-repeat: repeat;
`;
export const Flex = styled.div`
  display: flex;
  flex-direction: row-reverse;

  @media (max-width: 61.9em) and (min-height: 42em) {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
  }
  @media (min-width: 62em) and (min-height: 34.375em) {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
  }
`;
export const ToggleRules = styled.button`
  background-color: rgba(0, 0, 0, 0);
  padding: 0.875rem 2rem;
  color: white;
  letter-spacing: 0.2rem;
  border: 2px solid white;
  border-radius: 5px;
  cursor: pointer;
  z-index: 1;
  @media (min-width: 62em) {
    left: unset;
    transform: none;
    bottom: 1.5rem;
    right: 1.5rem;
  }
`;
export const ButtonGrid = styled.div`
  display: grid;
  position: relative;
  margin: 0 auto 14rem auto;
  max-width: 20rem;
  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;
  row-gap: 2rem;
  justify-content: center;
  justify-items: center;

  > :nth-child(3) {
    grid-column: 1 / span 2;
  }
  @media (min-width: 1200px) {
    margin: auto;
  }
`;
export const Triangle = styled.img`
  position: absolute;
  height: 70%;
  top: 55%;
  transform: translatey(-50%);
`;
