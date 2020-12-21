import styled from "styled-components";

const FooterDiv = styled.div`
  min-height: 20vh;
  background-color: ${(props) => props.theme.mainColor};
  display: flex;
  align-items: center;
  justify-content: center;

  & > p {
    padding-right: 5px;
    font-size: 0.9rem;
  }
`;

export default FooterDiv;
