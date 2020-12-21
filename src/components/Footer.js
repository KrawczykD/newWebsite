import FooterDiv from "./Footer.css";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = (props) => {
  return (
    <FooterDiv>
      <p>
        <FontAwesomeIcon icon={faCopyright} />
      </p>
      <p>Copyright</p>
      <p>{new Date().getFullYear()}</p>
      <p>
        <a href={props.footer.link}>{props.footer.header}</a>
      </p>
    </FooterDiv>
  );
};

export default Footer;
