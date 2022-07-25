import './CharacterContent.scss';
import CharacterList from '../CharacterList/CharacterList';
import CharacterInfo from '../CharacterInfo/CharacterInfo';
import { useState } from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const CharacterContent = () => {
    
    const [selectedCharacter, setCharacter] = useState(null);

    const handleCharacterSelected = (id) => {
        setCharacter(id);
    }

    return (
        <div className="CharacterContent">
            <ErrorBoundary>
                <CharacterList onCharacterSelected={handleCharacterSelected}/>
            </ErrorBoundary>

            <ErrorBoundary>
                <CharacterInfo characterId={selectedCharacter}/>
            </ErrorBoundary>
        </div>
    );
    
}


export default CharacterContent;