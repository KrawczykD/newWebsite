import styled from "styled-components";

const PortfolioDiv = styled.div`
  min-height: 100vh;

  & > div > p {
    padding: 20px;
    font-size: 1.2rem;
    background-color: ${(props) => props.theme.mainColor};
  }
`;

export default PortfolioDiv;
