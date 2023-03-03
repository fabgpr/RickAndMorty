import React from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";

const Div = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: #3286e6;
  padding: 4px;
  box-shadow: 10px 10px 270px 0px #519cf1 0.99;
`;

export default function NavBar(props) {
  return (
    <Div>
      <SearchBar onSearch={props.onSearch} />
    </Div>
  );
}
