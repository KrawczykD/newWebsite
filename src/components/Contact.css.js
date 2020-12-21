import styled from "styled-components";

const ContactDiv = styled.div`
  // min-height: 100vh;

  & > .left > p {
    display: flex;
    margin: 0;
    padding: 20px;
    font-size: 1.2rem;
    background-color: ${(props) => props.theme.mainColor};
    justify-content: flex-end;
  }

  & > .right {
    display: flex;
    flex-direction: column;
  }

  & > .right > p {
    display: flex;
    margin: 0;
    padding: 20px;
    font-size: 0.9rem;
    line-height: 1.2rem;
  }

  & > .right > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;

    input {
      margin: 20px 20px 0 20px;
      padding: 10px;
      border: none;
      border-bottom: 2px solid ${(props) => props.theme.mainColor};
      width: 100%;
    }

    input:focus,
    textarea:focus {
      outline-color: ${(props) => props.theme.mainColor};
    }

    input::placeholder {
    }

    textarea {
      margin: 20px 20px 0 20px;
      padding: 10px;
      border: none;
      border-bottom: 2px solid ${(props) => props.theme.mainColor};
      width: 100%;
      height: 20vh;
    }

    button {
      padding: 8px 24px;
      margin: 20px;
      font-size: 1.2rem;
      background: none;
      border: none;
      border-bottom: 2px solid ${(props) => props.theme.mainColor};
      cursor: pointer;
    }

    button:focus {
      outline: none;
    }
  }
`;

export default ContactDiv;
