import styled, { createGlobalStyle } from "styled-components";
/* Libraries */
import { Link, NavLink } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`
    body {
        color: ${(props) => props.theme.mainColor};
        background-color: ${(props) => props.theme.backgroundColor}; 
    }    
`;

export const Logo = styled(Link)`
  padding: 0.5em;

  img {
    width: 3rem;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  margin: 4px;

  &.active {
    color: ${(props) => props.theme.grey};
  }
`;

export const ThemeButton = styled.button`
    position: relative;
    background-color: ${(props) => props.theme.mainColor};
    color: ${(props) => props.theme.backgroundColor};
    border: none;
    font-size: 18px;
    padding: 0.4px;
    width: 125px;
    text-align: center;
    webkit-transition-duration: 0.4s;
    transition-duration: 1.4s;
    text-decoration: none;
    overflow: hidden;
    cursor: pointer;
}

.button:after {
    content: "";
    display: block;
    position: absolute;
    padding-top: 200%;
    padding-left: 250%;
    margin-left: -20px;
    margin-top: -120%;
    opacity: 0;
    transition: all 1.8s;
}

.button:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 3s;
`;

export const DeleteButtonStyled = styled.p`
  color: ${(props) => props.theme.grey};
`;

export const SearchBarStyle = styled.input`
  display: block;
  padding: 0.3rem;
  margin: 5rem auto;
  width: 25%;
`;

export const DetailWrapper = styled.div`
  display: block;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  width: 50%;

  img {
    width: 25%;
    float: left;
    margin-right: auto;
  }

  p {
    vertical-align: middle;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    margin: 20px auto;
    margin-top: 30px;
  }
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Description = styled.h4`
  text-align: center;
`;

export const ShopImage = styled.img`
  height: 250px;
  width: 350px;
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;
  opacity: 0.8;
  background-color: white;
  box-shadow: 5px 8px 10px 5px rgba(0, 0, 0, 0.2),
    6px 12px 20px 6px rgba(0, 0, 0, 0.19);
`;

export const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 200px);
  justify-content: center;
`;

export const ProductWrapper = styled.div`
  img {
    margin: 20px;
    height: 200px;
    width: 150px;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;
  }

  p {
    text-align: center;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-size: 14px;
    font-style: italic;
  }
`;
