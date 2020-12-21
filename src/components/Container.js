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
          title: "SAP Reports generator.",
          description:
            "Aplication for generating reports based on informations from SAP. You can downlaods ready reports or save to database.",
          img: "",
          url: "https://krawczykd.github.io/excel_reports/",
        },
        1: {
          title: "Store pallets application.",
          description:
            "This aplication was created for manage pallets in store. Each palet have unique id and required information. You can generate pallet card if necessery. You have easy acces to archive if you need information about deleted pallet.",
          img: "",
          url: "https://krawczykd.github.io/store/",
        },
        2: {
          title: "My personal website",
          description:
            "This is my website build in React. This site use, styled component for css, emailjs for sent messages, React hooks and more commone techniques. ",
          img: "",
          url: "http://damiankrawczyk.co.uk",
        },
      },
      contact: {
        header: "Contact",
        email: {
          adress: "damiankrawczyk23@gmail.com",
          text: "If you want contact with me , please Tap and sent me email",
        },
        phone: { number: "07538865743" },
        text:
          "If You want to contact me please senet me message or simple sent an email",
        placeholder: {
          input: "Your email",
          textarea: "What can I do for You ?",
          button: "Send",
        },
      },
      location: {
        location: "google location",
        text: "Manchester , United Kingdom",
      },
      footer: {
        header: "Damiankrawczyk.co.uk",
        copy: "Copyright",
        date: "",
        link: "http://www.damiankrawczyk.co.uk",
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
        <Contact contact={this.state.contact}></Contact>
        <Footer footer={this.state.footer}></Footer>
      </ContainerDiv>
    );
  }
}

export default Container;
