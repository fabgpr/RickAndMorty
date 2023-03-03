import Card from "./Card/Card";
import styled from "styled-components";

const CardsDiv = styled.div`
  margin-top: 3%;
  display: flex;
  padding: 2px;
  flex-direction: row;
  justify-content: space-between;
`;

const Cards = (props) => {
  const { characterList, onClose } = props;
  return (
    <CardsDiv>
      {characterList ? (
        characterList.map((el) => (
          <Card
            onClose={() => onClose(el.id)}
            name={el.name}
            species={el.species}
            gender={el.gender}
            image={el.image}
            id={el.id}
            key={el.id}
          />
        ))
      ) : (
        <h3>No hay Personajes</h3>
      )}
    </CardsDiv>
  );
};

export default Cards;
