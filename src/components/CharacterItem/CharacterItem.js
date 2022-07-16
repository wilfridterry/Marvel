import './CharacterItem.scss';

export default function CharacterItem({charcater}) {
    const {id, thumbnail, name} = charcater;

    return (
        <a className={'CharacterItem'}>
            <img src={thumbnail} alt={name} />
            <div className="CharacterItem-Name">{name}</div>
        </a>
    );
}