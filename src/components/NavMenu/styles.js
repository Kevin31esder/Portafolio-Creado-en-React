import styled from "styled-components";

export const NavBar = styled.header`
  position: fixed;
  z-index: 100;
  width: 100%;
  height: auto;
  background: transparent;
  display: flex;
  justify-content: center;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  transition: ease;
  height: 8vh;
  background: ${(props) => (props.scrollstatus ? "#ffffff" : "transparent")};
  border-radius: 10rem;
  width: 80%;
  align-items: center;
  margin: 0.5rem;
  padding: 0 0.4rem;
  color: ${(props) => (props.scrollstatus ? "black" : "#eeeeee")};
  transition: all 0.4s ease-in-out;
`;

export const List = styled.ul`
  display: none;
  height: 10vh;
  position: relative;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    padding-right: 3rem;
    color: ${(props) => (props.scrollstatus ? "black" : "#eeeeee")};
  }
  li {
    list-style: none;
    margin: 0.5rem 0.8rem;
    padding-bottom: 0.8rem;
    padding-top: 0.8rem;
    padding-left: 8px;
    padding-right: 4px;
    position: relative;
    a {
      text-decoration: none;
      font-size: 1rem;
      text-align: center;
      cursor: pointer;
      color: ${(props) => (props.scrollstatus ? "black" : "#eeeeee")};
      font-weight: 500;
      transition: all 0.3s ease;
      &:hover {
        letter-spacing: 4px;
        text-align: center;
        transition: all 0.3s ease;
        color: #00dfc4;
      }
      &:after {
        content: "";
        position: absolute;
        width: 0%;
        height: 1px;
        display: block;
        transition: all 0.3s ease;
        bottom: 25%;
      }
      &:hover::after {
        width: 100%;
        left: 0;
        height: 1px;
        background-color: #00dfc4;
      }
    }
  }
`;

export const MenuButton = styled.button`
  display: block;
  border: none;
  background: transparent;
  margin-right: 0.5rem;
  span {
    border: 1px solid
      ${(props) =>
        props.scrollstatus ? "rgb(23,23,23,0.6)" : "rgb(255, 255, 255, 0.3)"};
    border-radius: 2rem;
    padding: 0.6rem;
    display: flex;
    color: ${(props) => (props.scrollstatus ? "#000" : "#fff")};
    transition: 0.5s;
    align-items: center;
    &:hover {
      scale: 1.1;
      transition: 0.5s;
      color: #00dfc4;
      border: 1px solid #00dfc4;
    }
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const CloseButton = styled.button`
  display: block;
  border: none;
  background: transparent;
  span {
    border: 1px solid rgb(0, 0, 0, 0.3);
    border-radius: 2rem;
    padding: 0.6rem;
    display: flex;
    color: #000;
    transition: 0.5s;
    align-items: center;
    &:hover {
      scale: 1.1;
      transition: 0.5s;
      // background: #000;
      color: #00dfc4;
      border: 1px solid #00dfc4;
      box-shadow: 0px 9px 12px -1px rgba(150, 150, 150, 0.7);
    }
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const MobileViewNav = styled(Nav)`
  flex-direction: column;
  background: #fff;
  transition: all 0.5s ease-in-out;
  height: 100%;
  width: 100vw;
  padding: 2rem 0;
  border-radius: 0px;
`;

export const MobileMenu = styled.div`
  margin-top: 1rem;
  display: block;
  width: 90%;
  ul {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    li {
      list-style: none;
      padding: 1rem;
      // border: 1px solid #000;
      text-align: center;
      a {
        text-decoration: none;
        font-family: inherit;
        color: #000;
        font-size: 1rem;
      }
      transition: all 0.4s ease-in-out;
      &:hover {
        letter-spacing: 7px;
        transition: all 0.4s ease-in-out;
        // box-shadow: -7px 7px 3px -1px rgba(30, 30, 60, 0.4);
        box-shadow: 0px 25px 30px -17px rgba(150, 150, 150, 1);
        // background: rgb(23, 23, 23, 0.9);
        a {
          color: #00dfc4;
        }
      }
    }
  }
`;

export const Title = styled.h1`
  font-family: inherit;
  font-weight: 300;
  background: ${(props) => (props.scrollstatus ? "transparent" : "#00dfc4")};
  color: #000;
  font-size: 2rem;
  letter-spacing: 10px;
  position: relative;
  padding-left: 30px;
  padding-right: 20px;
  margin-left: 1.5rem;
  padding-top: 8px;
  padding-bottom: 8px;
  transition: 450ms ease all;
  &:hover {
    color: #00dfc4;
    background: transparent;
  }
  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 3px;
    width: 0;
    background: #00dfc4;
    transition: 400ms ease all;
  }

  :after {
    right: inherit;
    top: inherit;
    left: 0;
    bottom: 0;
  }
  &:hover:before {
    width: 100%;
    transition: 800ms ease all;
  }
  &:hover:after {
    width: 100%;
    transition: 800ms ease all;
  }
  @media all and (max-width: 768px) {
    font-size: 1.5rem;
    letter-spacing: 5px;
    padding-left: 15px;
    padding-right: 10px;
  }
`;
