import styled from "styled-components";

export const CardDiv = styled.div`
  margin: auto;
  width: 210px;
  height: 330px;
  background: #011522;
  border-radius: 15px;
  box-shadow: 1px 5px 60px 0px #100a886b;
`;

export const CharacterImg = styled.img`
  width: 80%;
  background: #6b64f3;
  border-radius: 20px;
  margin-top: 10px;
`;

export const DescriptionDiv = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 30px;
  font-size: 0.7em;
  font-weight: 600;
  color: white;
  &:h3 {
    width: 10px;
  }
`;

export const Details = styled.h3`
  margin: 3px;
`;

export const Name = styled.h2`
  text-align: center;
  font-weight: 650;
`;

export const Button = styled.button`
  background-color: #ff605c;
  margin-top: 10px;
  margin-left: 180px;
  border: none;
  border-radius: 50%;
  color: red;
  width: 18px;
  height: 18px;
  cursor: pointer;
`;
