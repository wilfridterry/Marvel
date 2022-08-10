import { Link, useParams } from "react-router-dom";
import useMarvelService from "../../services/MarvelService";
import SingleResource from "../OneResource/SingleResource";
import { Helmet } from "react-helmet";

export default function SingleComic() {
  const { getComic, process, setProcess } = useMarvelService();
  const { comicId } = useParams();

  return (
    <SingleResource
      process={process}
      setProcess={setProcess}
      service={getComic}
      resourceId={comicId}
    >
      {(comic) => <View comic={comic} />}
    </SingleResource>
  );
}

const View = ({ comic }) => {
  const { title, price, thumbnail, language, pageCount, description } = comic;

  return (
    <>
      <Helmet>
        <meta name="description" content={`${title} comics book`} />
        <title>{title}</title>
      </Helmet>
      <img src={thumbnail} alt={title} />
      <div className="SingleResource-Details">
        <div className="SingleResource-Title">{title}</div>
        <div className="SingleResource-Descr">{description}</div>
        <div className="SingleResource-Pages">{pageCount} pages</div>
        <div className="SingleResource-Language">
          Language: {language ? language : "en-us"}
        </div>
        <div className="SingleResource-Price">{price}$</div>
      </div>
      <Link to="/comics" className="SingleResource-Back">
        Back to all
      </Link>
    </>
  );
};
