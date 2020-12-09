import SkillsDiv from "./Skills.css";

const Skills = (props) => {
  let skills = [];

  for (let [key, value] of Object.entries(props.skills)) {
    if (value.title) {
      skills.push({ key: value });
    }
  }

  let list = skills.map((item) => (
    <div className="tile">
      <div className="top">
        <span>{item.key.title}</span>
        <span>{item.key.percent}%</span>
      </div>
      <div percent={item.key.percent} className="bottom">
        <span>{item.key.title}</span>
        <span>{item.key.percent}%</span>
      </div>
    </div>
  ));

  let skillsList = document.getElementsByClassName("bottom");

  let section = document.getElementsByClassName("skillsList");

  document.addEventListener("scroll", (e) => {
    if (
      window.scrollY > section[0].offsetTop - window.innerHeight &&
      window.scrollY < section[0].offsetTop + window.innerHeight
    ) {
      for (let i = 0; i < skillsList.length; i++) {
        skillsList[i].style.height = `${
          100 - skillsList[i].attributes.percent.value
        }%`;

        // console.log((skillsList[i].attributes.percent.value = 10));
      }
    } else {
      for (let i = 0; i < skillsList.length; i++) {
        skillsList[i].style.height = `100%`;
      }
    }
  });

  return (
    <SkillsDiv>
      <div>
        <p>{props.skills.header}</p>
        <div className="skillsList">{list}</div>
      </div>
    </SkillsDiv>
  );
};

export default Skills;
