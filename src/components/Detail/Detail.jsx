import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Text,
  ContainerDiv,
  Name,
  Img,
  InfoDiv,
  TextDiv,
  Button,
  DetailDiv,
} from "./DetailCss";

export default function Detail() {
  const { detailId } = useParams();

  const [character, setCharacter] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  const back = () => {
    navigate("/home");
  };

  return (
    <ContainerDiv>
      <Button onClick={back}>{`< Back`}</Button>
      <Name>{character?.name}</Name>
      <InfoDiv>
        <Img src={character?.image} />
        <TextDiv>
          <Text>Status: {character?.status}</Text>
          <Text>Gender: {character?.gender}</Text>
          <Text>Specie: {character?.species}</Text>
          <Text>Origin: {character?.origin?.name}</Text>
        </TextDiv>
      </InfoDiv>
    </ContainerDiv>
  );
}
