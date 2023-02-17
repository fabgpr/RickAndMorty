import styled from "styled-components";

export const Div = styled.div`
  padding: 14px;
`;

export const Input = styled.input`
  border-radius: 6px;
  border: none;
  padding: 3px;
  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  background-color: #00bfa6;
  padding: 7px;
  margin-left: 8px;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  border-radius: 10px;
  border: 2px dashed #00bfa6;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  transition: 0.4s;
  &:hover {
    transition: 0.4s;
    border: 2px dashed #00bfa6;
    background-color: #fff;
    color: #00bfa6;
  }
`;
