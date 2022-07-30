import "./ComicsList.scss";
import ComicsItem from "../ComicsItem/ComicsItem";
import Button from "../Button/Button";
import { useEffect, useState } from "react";
import useMarvelService from "../../services/MarvelService";
import Spinner from "../Spinner/Spinner";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const ComicsList = () => {
  const [comics, setComics] = useState([]);
  const { loading, error, getAllComics } = useMarvelService();

  const [newItemsLoading, setNewItemsLoading] = useState(null);
  const [offset, setOffset] = useState(610);
  const [ended, setEnded] = useState(false);

  useEffect(() => {
    getAllComics().then(handleComicsLoaded);
  }, []);

  const handleComicsLoaded = (comics) => {
    setComics(comics);
  };

  const handleLoadMore = () => {
    setNewItemsLoading(true);
    getAllComics(8, offset).then(handleLoadNewItems);
  };

  const handleLoadNewItems = (newComics = []) => {
    const ended = newComics.length < 8 ? true : false;
    setEnded(ended);
    setOffset((offset) => offset + 8);
    setComics([...comics, ...newComics]);
    setNewItemsLoading(false);
  };

  const comicsItems = comics.map((item, index) => {
    return <ComicsItem comics={item} key={index} />;
  });

  let comicsData = (
    <>
      <div className="ComicsList-Grid">{comicsItems}</div>
      <div className="ComicsList-Btn">
        <Button
          label="load more"
          isLong={true}
          onClick={handleLoadMore}
          disabled={newItemsLoading}
          style={{ display: ended ? "none" : "block" }}
        />
      </div>
    </>
  );

  const spinner = loading && !newItemsLoading ? <Spinner /> : null;

  const errorMessage = error ? <ErrorMessage /> : null;
  comicsData = spinner || errorMessage || !comicsData ? null : comicsData;

  return (
    <div className="ComicsList">
      <div className="ComicsList-Spinner">{spinner}</div>
      {errorMessage}
      {comicsData}
    </div>
  );
};

export default ComicsList;
