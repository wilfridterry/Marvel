import PropTypes from "prop-types";
import Spinner from "../Spinner/Spinner";
import Button from "../Button/Button";
import Skeleton from "../Skeleton/Skeleton";
import { useEffect, useState } from "react";
import CharacterImage from "../CharacterImage/CharacterImage";

import "./CharacterInfo.scss";
import { Link } from "react-router-dom";

const CharacterInfo = (props) => {
  const character = props.character;
console.log('render info');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!character) {
      return;
    }

    setLoading(true);
    setTimeout(() => setLoading(false), 500);
  }, [character]);

  const skeleton = character || loading ? null : <Skeleton />;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || !character) ? (
    <View character={character} />
  ) : null;

  return (
    <div>
      <div className="CharacterInfo">
        {skeleton}
        {spinner}
        {content}
      </div>
    </div>
  );
};

const View = ({ character }) => {
  const { thumbnail, name, description, homepage, wiki, comics } = character;

  let comicsList = comics.slice(10);
  comicsList = comicsList.map((item, index) => {
    const id = item.resourceURI.match(/\d{3,7}/)[0];
    return (
      <Link to={`/comics/${id}`} className="CharacterInfo-ComicsItem" key={index}>
        {item.name}
      </Link>
    );
  });

  return (
    <>
      <div className="CharacterInfo-Header">
        <CharacterImage thumbnail={thumbnail} name={name} />
        <div className="CharacterInfo-Details">
          <div className="CharacterInfo-Name">{name}</div>
          <div className="CharacterInfo-Btns">
            <Button label="Homepage" href={homepage} />
            <Button label="Wiki" isGrey={true} href={wiki} />
          </div>
        </div>
      </div>
      <div className="CharacterInfo-Descr">
        {!description ? "There is no description" : null}
        {description}
      </div>
      <div className="CharacterInfo-Comics">Comics: </div>
      <div className="CharacterInfo-ComicsList">
        {comicsList.length === 0 ? "There are no comics." : null}
        {comicsList}
      </div>
    </>
  );
};

CharacterInfo.propTypes = {
  characterId: PropTypes.object,
};

export default CharacterInfo;
