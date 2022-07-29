import "./ComicsItem.scss";

export default function ComicsItem({comics}) {

  const { thumbnail, title, price } = comics;
  
  return (
    <div className="ComicsItem">
      <a href="#">
        <img src={thumbnail} alt={title} />
        <div className="ComicsItem-Title">{title}</div>
        <div className="ComicsItem-Price">
          {price ? price + '$' : "NOT AVAILABLE"}
        </div>
      </a>
    </div>
  );
}
