import styled from "styled-components";

const SkillsDiv = styled.div`
  min-height: 100vh;
  & > div > p {
    display: flex;
    margin: 0;
    padding: 20px;
    font-size: 1rem;
    background-color: ${(props) => props.theme.mainColor};
    justify-content: flex-end;
  }

  & > div > .skillsList {
    padding: 20px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
  }

  & > div > .skillsList > .tile {
    position: relative;
    margin: 10px;
    height: 100px;
    width: 100px;
    overflow: hidden;
    border-radius: 50%;
    border: 1px solid ${(props) => props.theme.mainColor};
  }

  & > div > .skillsList > .tile > .top {
    background: ${(props) => props.theme.mainColor};
    position: absolute;
    width: 100%;
    height: 100%;
    color: white;

    span {
      display: block;
      text-align: center;
      padding-top: 30px;
      font-size: 1.2rem;
    }

    span + span {
      padding-top: 10px;
      text-align: center;
    }
  }

  & > div > .skillsList > .tile > .bottom {
    background: white;
    position: absolute;
    width: 100%;
    height: 100%;
    color: ${(props) => props.theme.mainColor};
    overflow: hidden;

    transition: height 3s linear;

    span {
      display: block;
      text-align: center;
      padding-top: 30px;
      font-size: 1rem;
    }

    span + span {
      padding-top: 10px;
      text-align: center;
    }
  }
`;

export default SkillsDiv;
