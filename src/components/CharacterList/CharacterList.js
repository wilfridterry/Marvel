import Button from '../Button/Button';
import CharacterItem from '../CharacterItem/CharacterItem';
import './CharacterList.scss';

export default function CharacterList() {
    const items = new Array(9).fill(null).map((item, index) => {
        return <CharacterItem key={index} isSelected={index === 1 ? true : false}/>;
    });

    return (
        <div className="CharacterList">
            <div className="CharacterList-Grid">
                {items} 
            </div>
            <div className="CharacterList-Btn">
                <Button label="Load more"/> 
            </div>        
        </div>
    );
}