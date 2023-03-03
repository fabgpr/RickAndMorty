import { GET_CHARACTERS, DELETE_CHARACTER } from "./action-types";

const initialState = {
  characterList: [],
  characterDetail: {},
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CHARACTERS:
      return {
        ...state,
        characterList: [...state.characterList, payload],
      };

    case DELETE_CHARACTER:
      return {
        ...state,
        characterList: state.characterList.filter((el) => el.id !== payload),
      };

    default:
      return { ...state };
  }
};

export default reducer;
