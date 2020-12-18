import styled from "styled-components";

const PortfolioDiv = styled.div`
  position: relative;
  padding-bottom: 1.5vh;

  .hideSection {
    // opacity: 0;
    position: relative;
    left: -150vw;

    transition: 1s all;
  }

  .unhideSection {
    // opacity: 1;
    position: relative;
    left: 0px;

    transition: 1s all;
  }

  & > div > .slideShow {
    position: relative;
  }

  & > div > p {
    padding: 20px;
    font-size: 1.2rem;
    background-color: ${(props) => props.theme.mainColor};
  }

  & > div > .slideShow > section {
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  & > div > .slideShow > section > img {
    width: 100%;
  }

  & > div > .dot {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 2px;
    border: 1px solid ${(props) => props.theme.mainColor};
    border-radius: 50%;
    background-color: white;
    cursor: pointer;
  }

  & > .dots {
    display: flex;
    justify-content: center;
  }

  & > div > .active {
    background-color: ${(props) => props.theme.mainColor};
    border: 1px solid ${(props) => props.theme.mainColor};
  }
`;

export default PortfolioDiv;
