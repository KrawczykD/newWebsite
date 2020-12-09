import styled from "styled-components";

const AboutmeDiv = styled.div`
  & > .left > p {
    display: flex;
    margin: 0;
  }

  & > .left > p:first-of-type {
    padding: 20px;
    font-size: 1.2rem;
    background-color: ${(props) => props.theme.mainColor};
  }

  & > .left > p {
    padding: 20px;
    font-size: 0.9rem;
    line-height: 1.2rem;
  }

  & > .right {
    display: none;
  }
`;

export default AboutmeDiv;
