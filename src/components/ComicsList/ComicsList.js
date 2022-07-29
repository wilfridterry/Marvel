import "./ComicsList.scss";
import ComicsItem from "../ComicsItem/ComicsItem";
import Button from "../Button/Button";
import { useEffect, useState } from "react";
import useMarvelService from "../../services/MarvelService";
import Spinner from "../Spinner/Spinner";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const ComicsList = () => {
  const [comics, setComics] = useState([]);

  const {loading, error, getAllComics} = useMarvelService();

  useEffect(() => {
    getAllComics()
      .then(handleComicsLoaded);
  }, []);

  const handleComicsLoaded = (comics) => {
    setComics(comics);
  }

  const comicsItems = comics.map((item, index) => {
    return <ComicsItem comics={item} key={item.id} />;
  });

  let comicsData = (
    <>
      <div className="ComicsList-Grid">{comicsItems}</div>
      <div className="ComicsList-Btn">
        <Button label="load more" isLong={true} />
      </div>
    </>
  );
  
  const spinner = loading ? <Spinner/> : null;
  const errorMessage = error ? <ErrorMessage/> : null;
  comicsData = spinner || errorMessage || !comicsData ? null : comicsData;

  return (
    <div className="ComicsList">
      {spinner}
      {errorMessage}
      {comicsData}
    </div>
  );
};

export default ComicsList;
