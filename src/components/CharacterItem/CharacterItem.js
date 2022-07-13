import './CharacterItem.scss';
import abyss from '../../resources/img/abyss.jpg';

export default function CharacterItem({isSelected}) {
    let className = 'CharacterItem';
    className += isSelected ? ' CharacterItem-Selected' : '';

    return (
        <div className={className}>
            <img src={abyss} alt="Abyss" />
            <div className="CharacterItem-Name">Abyss</div>
        </div>
    );
}