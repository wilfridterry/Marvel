import "./SingleComic.scss";
import xMen from "../../resources/img/x-men.png";

export default function SingleComic() {
  return (
    <div className="SingleComics">
      <img src={xMen} alt="X-MEN" />
      <div className="SingleComics-Details">
        <div className="SingleComics-Title">X-Men: Days of Future Past</div>
        <div className="SingleComics-Descr">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et impedit
          optio quidem consequatur autem sed obcaecati inventore sit fugit
          voluptas sint, magnam cumque iste excepturi qui rem fuga iusto unde?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et impedit
          optio quidem consequatur autem sed obcaecati inventore sit fugit
          voluptas sint, magnam cumque iste excepturi qui rem fuga iusto unde?
        </div>
        <div className="SingleComics-Pages">144 pages</div>
        <div className="SingleComics-Language">Language: en-us</div>
        <div className="SingleComics-Price">9.99$</div>
      </div>
      <div className="SingleComics-Back">Back to all</div>
    </div>
  );
}
