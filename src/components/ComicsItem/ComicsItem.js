import { Link } from "react-router-dom";
import "./ComicsItem.scss";

export default function ComicsItem({comics}) {

  const { thumbnail, title, price, id } = comics;
  
  return (
    <div className="ComicsItem">
      <Link to={`${id}`}>
        <img src={thumbnail} alt={title} />
        <div className="ComicsItem-Title">{title}</div>
        <div className="ComicsItem-Price">
          {price ? price + '$' : "NOT AVAILABLE"}
        </div>
      </Link>
    </div>
  );
}
