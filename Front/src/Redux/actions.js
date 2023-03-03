import { GET_CHARACTERS, DELETE_CHARACTER } from "./action-types";

export const getCharacter = (character) => {
  return (dispatch) => {
    fetch(`http://localhost:3002/rickandmorty/onsearch/${character}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.name) {
          return dispatch({
            type: GET_CHARACTERS,
            payload: data,
          });
        } else window.alert("No hay personajes con ese ID");
      });
  };
};

export const deleteCharacter = (id) => {
  return {
    type: DELETE_CHARACTER,
    payload: id,
  };
};
