import CharacterImage from '../CharacterImage/CharacterImage';
import './CharacterItem.scss';

export default function CharacterItem({charcater}) {
    const {id, thumbnail, name} = charcater;

    return (
        <a className={'CharacterItem'}>
            <CharacterImage thumbnail={thumbnail} name={name} />
            <div className="CharacterItem-Name">{name}</div>
        </a>
    );
}