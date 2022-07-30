import "./ComicsList.scss";
import ComicsItem from "../ComicsItem/ComicsItem";
import Button from "../Button/Button";
import useMarvelService from "../../services/MarvelService";
import Spinner from "../Spinner/Spinner";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import useLoadingResources from "../../hooks/loadingResources.hook";

const ComicsList = () => {
  const { loading, error, getAllComics } = useMarvelService();

  const { resources, newItemsLoading, ended, handleLoadMore } =
    useLoadingResources(getAllComics, 8, 610);

  const comicsItems = resources.map((item, index) => {
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
