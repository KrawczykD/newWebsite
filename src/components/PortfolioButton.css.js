import styled from "styled-components";

const Button = styled.button`
  position: absolute;
  top: 50%;
  ${(props) => props.direction}: 20px;

  padding: 10px;
  background: none;
  opacity: 0.2;
  border: none;
  font-size: 2rem;
  border-radius: 50%;

  &:focus {
    outline: 0;
  }

  &:hober {
    opacity: 0.4;
  }
`;

export default Button;
