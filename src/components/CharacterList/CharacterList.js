import PropTypes from "prop-types";
import React, { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import useLoadingResources from "../../hooks/loadingResources.hook";
import useMarvelService from "../../services/MarvelService";
import Button from "../Button/Button";
import CharacterItem from "../CharacterItem/CharacterItem";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Spinner from "../Spinner/Spinner";
import "./CharacterList.scss";

const setContent = (process, Component, newItemsLoading) => {
  switch (process) {
    case "waiting":
      return <Spinner />;
    case "loading":
      return newItemsLoading ? <Component /> : <Spinner />;
    case "confirmed":
      return <Component />;
    case "error":
      return <ErrorMessage />;
    default:
      throw new Error("Unexpectd process state");
  }
};

const CharacterList = (props) => {
  const { getAllCharacters, process, setProcess } =
    useMarvelService();
  const { resources, newItemsLoading, ended, handleLoadMore } =
    useLoadingResources(getAllCharacters, 8, 620, setProcess);

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
            props.onCharacterSelected(item);
            focusOnItem(index);
          }
        }}
        refChar={(el) => {
          characterRefs.current[index] = el;
        }}
      />
    );
  });

  return (
    <div className="CharacterList">
      <CSSTransition
        in={process === "loading" && !newItemsLoading ? false : true}
        timeout={300}
        classNames="CharacterList-Grid"
        unmountOnExit
      >
        <div>
          {setContent(
            process,
            () => (
              <div className="CharacterList-Grid">{items}</div>
            ),
            newItemsLoading
          )}

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
      </CSSTransition>
    </div>
  );
};

CharacterList.propTypes = {
  onCharacterSelected: PropTypes.func,
};

export default CharacterList;
