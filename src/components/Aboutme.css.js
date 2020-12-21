import styled from "styled-components";

const AboutmeDiv = styled.div`
  & > .left > p {
    display: flex;
    margin: 0;
    padding: 20px;
    font-size: 0.9rem;
    line-height: 1.2rem;
  }

  & > .left > p:first-of-type {
    font-size: 1.2rem;
    background-color: ${(props) => props.theme.mainColor};
  }

  & > .right {
    display: none;
  }
`;

export default AboutmeDiv;
