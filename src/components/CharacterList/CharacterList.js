import PropTypes from "prop-types";
import React, { useRef } from "react";
import useLoadingResources from "../../hooks/loadingResources.hook";
import useMarvelService from "../../services/MarvelService";
import Button from "../Button/Button";
import CharacterItem from "../CharacterItem/CharacterItem";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Spinner from "../Spinner/Spinner";
import "./CharacterList.scss";

const CharacterList = (props) => {
  const { getAllCharacters, loading, error } = useMarvelService();
  const { resources, newItemsLoading, ended, handleLoadMore } =
    useLoadingResources(getAllCharacters, 8, 620);

  const characterRefs = useRef([]);

  const focusOnItem = (id) => {
    characterRefs.current.forEach((item) => {
      item.classList.remove("CharacterItem-Selected");
    });
    characterRefs.current[id].classList.add("CharacterItem-Selected");
    characterRefs.current[id].focus();
  };

  const items = resources.map((item, index) => {
    return (
      <CharacterItem
        tabIndex={0}
        key={item.id}
        charcater={item}
        onClick={() => {
          props.onCharacterSelected(item);
          focusOnItem(index);
        }}
        onKeyPress={(e) => {
          if (e.key === " " || e.key === "Enter") {
            props.onCharacterSelected(item.id);
            focusOnItem(index);
          }
        }}
        refChar={(el) => {
          characterRefs.current[index] = el;
        }}
      />
    );
  });

  const list = <div className="CharacterList-Grid">{items}</div>;

  const spinner = loading && !newItemsLoading ? <Spinner /> : null;
  const errorMessage = error ? <ErrorMessage /> : null;

  return (
    <div className="CharacterList">
      {list}
      {spinner}
      {errorMessage}
      <div className="CharacterList-Btn">
        <Button
          label="Load more"
          isLong={true}
          onClick={handleLoadMore}
          disabled={newItemsLoading}
          style={{ display: ended ? "none" : "block" }}
        />
      </div>
    </div>
  );
};

CharacterList.propTypes = {
  onCharacterSelected: PropTypes.func,
};

export default CharacterList;
