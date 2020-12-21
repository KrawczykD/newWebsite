import ContactDiv from "./Contact.css";
import { useState } from "react";

import { init, send } from "emailjs-com";
init("user_0suK27oQaYGWDSVFCqOMt");

// var templateParams = {
//   name: "James",
//   message: "Check this out!",
// };

const Contact = (props) => {
  let [templateParams, setTemplateParams] = useState({
    name: "",
    message: "",
  });

  let [validation, toggleValidation] = useState(true);

  const changeHandler = (e) => {
    setTemplateParams({ ...templateParams, [e.target.name]: e.target.value });
    toggleValidation((validation = true));
  };

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  return (
    <ContactDiv>
      <div className="left">
        <p>{props.contact.header}</p>
      </div>

      <div className="right">
        <p>{props.contact.text}</p>
        <div className="contact">
          <input
            placeholder={props.contact.placeholder.input}
            type="email"
            onChange={changeHandler}
            name="name"
            value={templateParams.name}
          ></input>
          <textarea
            placeholder={props.contact.placeholder.textarea}
            type="text"
            onChange={changeHandler}
            name="message"
            value={templateParams.message}
          ></textarea>
          {validation ? (
            <p>Before you click send please add your email and message!</p>
          ) : (
            <p>D'oh! Did you miss something?</p>
          )}
          <button
            onClick={() => {
              if (
                validateEmail(templateParams.name) &&
                templateParams.message !== ""
              ) {
                send(
                  "service_tl6q8z5",
                  "template_3htv59m",
                  templateParams
                ).then(
                  function () {
                    console.log("SUCCESS!");
                    toggleValidation((validation = true));
                    setTemplateParams({
                      ...templateParams,
                      name: "",
                      message: "",
                    });
                  },
                  function (error) {
                    console.log("FAILED...", error);
                    toggleValidation((validation = false));
                  }
                );
              } else {
                toggleValidation((validation = false));
              }
            }}
          >
            {props.contact.placeholder.button}
          </button>
        </div>
      </div>
    </ContactDiv>
  );
};

export default Contact;
