import "./ComicsList.scss";
import ComicsItem from "../ComicsItem/ComicsItem";
import Button from "../Button/Button";
import useMarvelService from "../../services/MarvelService";
import Spinner from "../Spinner/Spinner";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import useLoadingResources from "../../hooks/loadingResources.hook";
import { CSSTransition } from "react-transition-group";

const setContent = (process, Component, newItemsLoading) => {
  switch (process) {
    case "waiting":
      return (
        <div className="ComicsList-Spinner">
          <Spinner />
        </div>
      );
    case "loading":
      return newItemsLoading ? (
        <Component />
      ) : (
        <div className="ComicsList-Spinner">
          <Spinner />
        </div>
      );
    case "confirmed":
      return <Component />;
    case "error":
      return <ErrorMessage />;
    default:
      throw new Error("Unexpectd process state");
  }
};

const ComicsList = () => {
  const { getAllComics, process, setProcess } =
    useMarvelService();

  const { resources, newItemsLoading, ended, handleLoadMore } =
    useLoadingResources(getAllComics, 8, 610, setProcess);

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

  return (
    <div className="ComicsList">
      {/* {process === 'loading' && !newItemsLoading ? setContent(process, () => {}) : null} */}
      <CSSTransition
        in={process === 'loading' && !newItemsLoading ? false : true}
        timeout={300}
        classNames="ComicsList-Data"
        unmountOnExit
      >
        <div>
          {setContent(
            process,
            () => (
              <div className="ComicsList-Data">{comicsData}</div>
            ),
            newItemsLoading
          )}
        </div>
      </CSSTransition>
    </div>
  );
};

export default ComicsList;
