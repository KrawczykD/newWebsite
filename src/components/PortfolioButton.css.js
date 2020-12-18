import styled from "styled-components";

const Button = styled.button`
  position: absolute;
  top: 50%;
  ${(props) => props.direction}: 20px;

  padding: 10px;
  background: white;
  opacity: 0.5;
  border: none;
  font-size: 2rem;

  &:focus {
    outline: 0;
  }
`;

export default Button;
