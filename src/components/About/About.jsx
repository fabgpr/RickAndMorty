import React from "react";
import { ContainerDiv, Span, AboutMe, Footer } from "./AboutCss";

export default function About() {
  return (
    <ContainerDiv>
      <AboutMe>About Me: </AboutMe>
      <Span>
        Hola! Mi nombre es Fabian Pacheco y este es mi proyecto integrador para
        SoyHenry
      </Span>
      <Footer>
        <svg></svg>
      </Footer>
    </ContainerDiv>
  );
}
