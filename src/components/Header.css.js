import styled, { ThemeProvider } from "styled-components";

const HeaderDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  max-height: 100vh;
  min-height: 100vh;

  & > .right {
    display: none;
    position: relative;
  }

  & > .right > img {
    display:none;
    position: absolute;
    bottom:0;
    right:0;
  }

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    flex-direction: column;
    width: 100%;
    
  }

  & > .left > div {
    position: relative;
    padding: 10px 20px;
    margin: 20px;
    text-align:center;
  }

  & > .left > div::before {
    display: block;
    content: "";
    width: 30px;
    height: 30px;
    position: absolute;
    border-top: 2px solid ${(props) => props.theme.mainColor};
    border-left: 2px solid ${(props) => props.theme.mainColor};
    top: 0px;
    left: 0px;
    animation-duration: 1s;
    animation-name: extend;
  }

  & > .left > div::after {
    display: block;
    content: "";
    width: 30px;
    height: 30px;
    position: absolute;
    border-bottom: 2px solid ${(props) => props.theme.mainColor};
    border-right: 2px solid ${(props) => props.theme.mainColor};
    bottom: 0px;
    right: 0px;
    animation-duration: 1s;
    animation-name: extend;
  }

  @keyframes extend {
    from {
      width: 200px;
      height: 0px;
    }

    to {
      width: 30px;
      height: 30px;
    }
  }

  @media (min-width: ${(props) => props.theme.breakPoints.l}){

    background-image: linear-gradient(
    120deg,
    ${(props) => props.theme.gradientColor},
    ${(props) => props.theme.gradientColor} 60%,
    ${(props) => props.theme.mainColor} 60%,
    ${(props) => props.theme.mainColor}
  );

  & > .right {
    display:block;
  }

  & > .right > img {
    display:block;
    height: 80vh;
  }

  & > .left > div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 2rem;
  }

  & > div:nth-child(2) {
    display:block;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.xl}){
    & > .right > img {
      height: 100vh;
      padding-right: 10%;
    }
  }
`;

export default HeaderDiv;
