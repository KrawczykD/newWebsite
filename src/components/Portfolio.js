import { useEffect, useState } from "react";
import PortfolioDiv from "./Portfolio.css";
import PortfolioButton from "./PortfolioButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import img0 from "../assets/1.jpg";
import img1 from "../assets/2.jpg";
import img2 from "../assets/3.jpg";
import img3 from "../assets/4.jpg";

const images = [img0, img1, img2, img3];

const Portfolio = (props) => {
  let projects = [];

  let [visible, changeSlide] = useState(0);

  for (let [key, value] of Object.entries(props.portfolio)) {
    if (value.title) {
      projects.push({ key: value, img: key });
    }
  }

  const change = (flow) => {
    if (flow) {
      document.querySelector(".slideShow").classList.add("hideSection");
      document.querySelector(".slideShow").classList.remove("unhideSection");
    } else {
      document.querySelector(".slideShow").classList.remove("hideSection");
      document.querySelector(".slideShow").classList.add("unhideSection");
    }
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     document.querySelector(".portfolioDiv").classList.remove("hideSection");
  //   }, []);
  // }, 1000);

  let list = projects.map((item) => (
    <section>
      <h3>{item.key.title}</h3>
      <img src={images[item.img]} />
      {/* <img src={`../assets/1.jpg`}></img> */}
      <div>{item.key.description}</div>
    </section>
  ));

  return (
    <PortfolioDiv>
      <div>
        <p>{props.portfolio.header}</p>
        <div className="slideShow unhideSection">{list[visible]}</div>
      </div>
      <PortfolioButton
        direction="right"
        onClick={() => {
          change(true);
          setTimeout(() => {
            visible < projects.length - 1
              ? changeSlide(visible + 1)
              : changeSlide((visible = 0));
            change(false);
          }, 1000);
        }}
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </PortfolioButton>
      <PortfolioButton
        direction="left"
        onClick={() => {
          document.querySelector(".slideShow").classList.add("hideSection");
          document
            .querySelector(".slideShow")
            .classList.remove("unhideSection");
          setTimeout(() => {
            visible != 0
              ? changeSlide(visible - 1)
              : changeSlide((visible = projects.length - 1));
            document
              .querySelector(".slideShow")
              .classList.remove("hideSection");
            document.querySelector(".slideShow").classList.add("unhideSection");
          }, 1000);
        }}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </PortfolioButton>
      <div className="dots">
        {projects.map((item, index) =>
          index == visible ? (
            <div className="dot active"></div>
          ) : (
            <div
              onClick={() => {
                change(true);
                setTimeout(() => {
                  changeSlide((visible = index));
                  change(false);
                }, 1000);
              }}
              className="dot"
            ></div>
          )
        )}
      </div>
    </PortfolioDiv>
  );
};

export default Portfolio;
