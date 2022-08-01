import "./SingleComic.scss";
import { Link, useParams } from "react-router-dom";
import useMarvelService from "../../services/MarvelService";
import { useEffect, useState } from "react";
import Spinner from "../Spinner/Spinner";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

export default function SingleComic() {
  const [comic, setComic] = useState(null);
  const { comicId } = useParams();
  const { getComic, loading, error } = useMarvelService();

  useEffect(() => {
    getComic(comicId).then((comic) => setComic(comic));
  }, [comicId]);

  const spinner = loading ? <Spinner /> : null;
  const errorMessage = error ? <ErrorMessage /> : null;

  const comicData = !loading && !error && comic ? <View comic={comic} /> : null;

  return (
    <div className="SingleComics">
      {spinner}
      {errorMessage}
      {comicData}
    </div>
  );
}

const View = ({ comic }) => {
  const {title, price, thumbnail, language, pageCount, description} = comic;

  return (
    <>
      <img src={thumbnail} alt={title} />
      <div className="SingleComics-Details">  
        <div className="SingleComics-Title">{title}</div>
        <div className="SingleComics-Descr">{description}</div>
        <div className="SingleComics-Pages">{pageCount} pages</div>
        <div className="SingleComics-Language">Language: {language ? language : 'en-us'}</div>
        <div className="SingleComics-Price">{price}$</div>
      </div>
      <Link to="/comics" className="SingleComics-Back">Back to all</Link>
    </>
  );
};
