import styled, { createGlobalStyle } from "styled-components";
/* Libraries */
import { Link, NavLink } from "react-router-dom";

import { BiBookAdd } from "react-icons/bi";
import { VscSignOut } from "react-icons/vsc";

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

export const BackLink = styled(Link)`
  .backlink {
    margin-left: 90%;
    width: 35px;
    height: 35px;
  }
`;

export const BiBookAddStyled = styled(BiBookAdd)`
  margin-left: 75%;
  margin-bottom: 50px;
`;

export const ModalButton = styled.button`
  color: ${(props) => props.theme.backgroundColor};
  background-color: ${(props) => props.theme.mainColor};
  width: 100px;
  border-radius: 5px;
  &:hover {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;

export const UpdateButtonStyled = styled.p`
  color: ${(props) => props.theme.mainColor};
  font-style: italic;
  cursor: pointer;
`;

export const AuthButtonStyled = styled.button`
  font-size: 0.9em;
  padding: 0.25em 1em;
  margin-left: 0.5em;
  border-radius: 5px;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.mainColor};
`;

export const ThemeButton = styled.button`
    position: relative;
    background-color: ${(props) => props.theme.mainColor};
    color: ${(props) => props.theme.backgroundColor};
    border: none;
    border-radius: 5px;
    font-size: 16px;
    padding: 0.4px;
    width: 90px;
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
  cursor: pointer;
`;

export const SearchBarStyle = styled.input`
  display: block;
  padding: 0.3rem;
  margin: 5rem auto;
  width: 25%;
`;

export const DetailWrapper = styled.div`
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  cursor: default;

  img {
    width: 25%;
    float: left;
    padding: 3px;
  }

  p {
    vertical-align: middle;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    margin: auto 20px;
    margin-top: 30px;
    font-style: italic;
    padding: 10px;
  }

  .bookname {
    color: #1d3557;
    font-weight: bold;
    font-style: normal;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 35px;
  cursor: default;
`;

export const Description = styled.h4`
  text-align: center;
  font-size: 13px;
  padding-bottom: 30px;
  cursor: default;
`;

export const ShopImage = styled.img`
  height: 400px;
  width: 600px;
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
  cursor: default;

  img {
    margin: 20px;
    height: 200px;
    width: 150px;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 3px;
    cursor: grab;
  }
  img:hover {
    background-color: white;
  }

  p {
    text-align: center;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-size: 14px;
  }
`;
export const SignOutStyled = styled(VscSignOut)`
  size: "2em";
  margin: 5px;
`;
