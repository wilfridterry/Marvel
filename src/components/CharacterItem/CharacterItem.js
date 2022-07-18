import CharacterImage from '../CharacterImage/CharacterImage';
import './CharacterItem.scss';

export default function CharacterItem({charcater, onClick}) {
    const {thumbnail, name} = charcater;

    return (
        <div className={'CharacterItem'} onClick={onClick}>
            <CharacterImage thumbnail={thumbnail} name={name} />
            <div className="CharacterItem-Name">{name}</div>
        </div>
    );
}