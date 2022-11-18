import styled, { keyframes } from "styled-components";

export const MoveInTransition = keyframes`
0% {
  opacity: 0;
  transform: translateY(5rem); }
100% {
  opacity: 1;
  transform: translate(0); }`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url("https://res.cloudinary.com/dzdh52ops/image/upload/v1663565958/Portfolio%20resources/bg_eikqkz.jpg");
  background-size: cover;
  color: #eeeeee;
`;

export const Name = styled.h1`
  font-size: 3rem;
  font-family: inherit;
  font-weight: 400;
  color: #fff;
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Scroller = styled(Name)`
  padding-right: 0.4rem;
`;

export const SapnElement = styled.span`
  font-size: 4rem;
  font-weight: 700;
  color: #00dfc4;
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const TypeEffectCOntainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Button = styled.a`
  color: #00dfc4;
  margin: 2rem;
  background: transparent;
  padding: 0.8rem 2rem;
  border: 1px solid #00dfc4;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  &:hover {
    background: #00dfc4;
    color: #000;
    letter-spacing: 3px;
    box-shadow: 0px 6px 2px -3px rgba(0, 244, 220, 0.76);
    transition: all 0.4s ease-in-out;
  }
`;
