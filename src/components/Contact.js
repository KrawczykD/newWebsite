import ContactDiv from "./Contact.css";

import { init, send } from "emailjs-com";
init("user_0suK27oQaYGWDSVFCqOMt");

var templateParams = {
  name: "James",
  message: "Check this out!",
};

const Contact = () => {
  send("service_tl6q8z5", "template_3htv59m", templateParams).then(
    function () {
      console.log("SUCCESS!");
    },
    function (error) {
      console.log("FAILED...", error);
    }
  );

  return (
    <ContactDiv>
      <button
        onClick={() => {
          send("service_tl6q8z5", "template_3htv59m", templateParams).then(
            function () {
              console.log("SUCCESS!");
            },
            function (error) {
              console.log("FAILED...", error);
            }
          );
        }}
      >
        Sent Email
      </button>
    </ContactDiv>
  );
};

export default Contact;
