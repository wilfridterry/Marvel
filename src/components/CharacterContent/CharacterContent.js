import './CharacterContent.scss';
import CharacterList from '../CharacterList/CharacterList';
import CharacterInfo from '../CharacterInfo/CharacterInfo';

export default function CharacterContent() {
    return (
        <div className="CharacterContent">
            <CharacterList />
            <CharacterInfo />
        </div>
    );
}