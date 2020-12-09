import AboutmeDiv from "./Aboutme.css";

const Aboutme = (props) => {
  return (
    <AboutmeDiv>
      <div className="left">
        <p>{props.aboutme.header}</p>
        <p>{props.aboutme.paragraph1}</p>
        <p>{props.aboutme.paragraph2}</p>
      </div>

      <div className="right"></div>
    </AboutmeDiv>
  );
};

export default Aboutme;
