import CharacterImage from "../CharacterImage/CharacterImage";
import "./CharacterItem.scss";

export default function CharacterItem({ charcater, refChar, ...other }) {
  const { thumbnail, name } = charcater;

  return (
    <div className={"CharacterItem"} {...other} ref={refChar}>
      <CharacterImage thumbnail={thumbnail} name={name} />
      <div className="CharacterItem-Name">{name}</div>
    </div>
  );
}
