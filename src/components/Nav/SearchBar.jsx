import { useDispatch, useSelector } from "react-redux";
import { getCharacter } from "../../Redux/actions";
import React, { useState } from "react";
import { Div, Input, Button } from "./SearchBarCss";

export default function SearchBar() {
  const [characters, setCharacters] = useState({
    character: "",
  });

  const dispatch = useDispatch();

  const { characterList } = useSelector((state) => state);

  const input = (event) => {
    setCharacters({
      character: event.target.value,
    });
  };

  const getCharacterData = ({ character }) => {
    const idArr = characterList.map((el) => el.id);
    if (!idArr.includes(character * 1)) {
      dispatch(getCharacter(character));
    } else window.alert("Esa card ya existe!");
  };

  return (
    <Div>
      <Input
        type="search"
        placeholder="        Insert Character Id"
        onChange={input}
        value={characters.character}
      />
      <Button
        onClick={() => {
          getCharacterData(characters);
          setCharacters({ character: "" });
          console.log(characterList);
        }}
      >
        Agregar
      </Button>
    </Div>
  );
}
