import HeaderDiv from "./Header.css";
import image from "../assets/man.png";

const Header = (props) => {
  return (
    <HeaderDiv>
      <div className="left">
        <div>
          <h1>{props.header[0]}</h1>
          <p>{props.header[1]}</p>
        </div>
      </div>
      <div className="right">
        <img src={image}></img>
      </div>
    </HeaderDiv>
  );
};

export default Header;
