import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteCharacter } from "../../../Redux/actions";
import {
  Button,
  CardDiv,
  CharacterImg,
  DescriptionDiv,
  Name,
  Details,
} from "./CardCss";

export default function Card({ name, species, gender, onClose, image, id }) {
  const dispatch = useDispatch();

  return (
    <CardDiv>
      <Button onClick={onClose}></Button>
      <CharacterImg src={image} alt={name} />
      <DescriptionDiv>
        <Link to={`/detail/${id}`}>
          <Name>{name}</Name>
        </Link>
        <Details>{species}</Details>
        <Details>{gender}</Details>
      </DescriptionDiv>
    </CardDiv>
  );
}
