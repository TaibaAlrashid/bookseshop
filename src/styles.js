import styled, { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle `
    body {
        color: ${props => props.theme.mainColor};
        background-color: ${props => props.theme.backgroundColor}; 

`;

export const Title = styled.h1`
    text-align: center;

`;

export const Description = styled.h4`
    text-align: center;

`;

export const ShopImage = styled.img `
    height: 250px;
    width: 350px;
    display: block;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 20px;
    opacity: 0.8;
    background-color: white;
    box-shadow: 5px 8px 10px 5px rgba(0, 0, 0, 0.2), 6px 12px 20px 6px rgba(0, 0, 0, 0.19);
`;

export const ListWrapper = styled.div`
    display: flex;
    align-items: center;
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
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-size: 14px;
        font-style: italic; 
        font-variant: small-caps;
    }

`;


