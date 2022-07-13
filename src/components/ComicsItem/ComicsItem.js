import './ComicsItem.scss';

export default function ComicsItem({imgSrc, ImgAlt, title, price}) {

    return (
        <div className="ComicsItem">
            <a href="#">
                <img src={imgSrc} alt={ImgAlt} />
                <div className="ComicsItem-Title">{title}</div>
                <div className="ComicsItem-Price">{price ? price : 'NOT AVAILABLE'}</div>
            </a>
        </div>
    );
}