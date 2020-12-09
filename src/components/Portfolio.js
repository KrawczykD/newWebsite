import PortfolioDiv from "./Portfolio.css";

const Portfolio = (props) => {
  return (
    <PortfolioDiv>
      <div>
        <p>{props.portfolio.header}</p>
      </div>
    </PortfolioDiv>
  );
};

export default Portfolio;
