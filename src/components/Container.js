import React from "react";
import ContainerDiv from "./Container.css";
import Header from "./Header";
import Aboutme from "./Aboutme";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import Contact from "./Contact";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: {
        0: "DAMIAN KRAWCZYK",
        1: "MERN DEVELOPER",
      },

      aboutme: {
        header: "Who I am",
        paragraph1:
          "My name is Damian Krawczyk and I'am junior web developer from Manchester. I'm friendly, and active person who hate boring. I always have to learn something new and discover new things. I love solving problems. I finished IT school and I have a lot of coding courses and challenges behind me. I like new technologies and gadgets.",
        paragraph2:
          "This is my React website, design and build from scratch by me. I develop this website to show my skills and knowledge. I would like to show my future employer, my way of thinking and my code. On my website on section portfolio you can find my few other projects. This website was built by using React technology and design as a responsive website with using common trends and techniques. Please feel free to explore my website.",
      },

      skills: {
        header: "What I am most skilled",
        0: { title: "MERN", percent: "30" },
        1: { title: "REACT", percent: "10" },
        2: { title: "EXPRESS", percent: "20" },
        3: { title: "MONGO", percent: "100" },
        4: { title: "NODE.JS", percent: "80" },
        5: { title: "GIT", percent: "40" },
        6: { title: "JS", percent: "50" },
        7: { title: "CSS", percent: "70" },
        8: { title: "HTML", percent: "90" },
      },
      portfolio: {
        header: "What I created",
        0: {
          title: "Title for first position1",
          description:
            "This is an Landis + Gyr app created in react for createing reports lorem loremloremloremloremlorem lorem lorem vvloremlorem lorem",
          img: require("../assets/1.jpg"),
          url: "https://krawczykd.github.io/store/",
        },
        1: {
          title: "Title for first position2",
          description: "",
          img: "",
          url: "",
        },
        2: {
          title: "Title for first position3",
          description: "",
          img: "",
          url: "",
        },
        3: {
          title: "Title for first position4",
          description: "",
          img: "",
          url: "",
        },
      },
      contact: {
        header: "CONTACT",
        email: {
          adress: "damiankrawczyk23@gmail.com",
          text: "If you want contact with me , please Tap and sent me email",
        },
        phone: { number: "07538865743" },
        text: "Tap phone to contact me",
      },
      location: {
        location: "google location",
        text: "Manchester , United Kingdom",
      },
      footer: {
        header: "FOOTER",
        copy: "Copyright",
        date: "",
        link: "damiankrawczyk23@gmail.com",
      },
    };
  }

  render() {
    return (
      <ContainerDiv>
        <Header header={this.state.header}></Header>
        <Aboutme aboutme={this.state.aboutme}></Aboutme>
        <Skills skills={this.state.skills}></Skills>
        <Portfolio portfolio={this.state.portfolio}></Portfolio>
        <Contact></Contact>
        <Footer></Footer>
      </ContainerDiv>
    );
  }
}

export default Container;
