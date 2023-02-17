import styled from "styled-components";

export const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DetailDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Button = styled.button`
  border: none;
  display: inline;
  align-self: flex-start;
  margin: 30px 30px;
  color: white;
  font-size: x-large;
  background-color: transparent;
  background-repeat: no-repeat;
  cursor: pointer;
  overflow: hidden;
  outline: none;
`;

export const Name = styled.h1`
  position: absolute;
`;

export const Img = styled.img`
  border-radius: 14px;
  width: 50%;
  height: 70%;
`;

export const InfoDiv = styled.div`
  display: flex;
  border-radius: 10px;
  width: 40%;
  padding: 3vw;
  background: #5f9ea0;
  border: solid 2px;
`;

export const TextDiv = styled.div`
  flex-direction: column;
  display: flex;
  margin-left: 30px;
`;

export const Text = styled.h3`
  text-align: left;
  background: gray;
  padding: 5px;
  border-radius: 10px;
  color: black;
`;
