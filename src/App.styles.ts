import styled, { createGlobalStyle } from "styled-components";
// @ts-ignore
import BGImage from "./assets/images/hero.jpg";

export const GlobalStyle = createGlobalStyle`
html {
    height: 100%;
}
body {
    background-image: url(${BGImage});
    background-size: cover;

    background-position: center;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
}

* {
    box-sizing: border-box;
    font-family: 'Catamaran', sans-serif;
}
`;

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;

> p {
    color: #fff;
}

.score {
    color: #fff;
    font-size: 2rem;
    n: 0;
}

h1 {
    font-family: Fascinate Inline, sans-serif;
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    -moz-background-clip: text;
    filter: drop-shadow(2px 2px #0085a3);
    text-align center;
    font-size: 70px;
    margin: 20px;
    font-weight: 400;
}

.start, .next {
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #ffcc91);
    border: 2px solid @d38558;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.25);
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
}

.start {
    max-width: 200px
}
`;
