import "./CharacterContent.scss";
import CharacterList from "../CharacterList/CharacterList";
import CharacterInfo from "../CharacterInfo/CharacterInfo";
import { useState } from "react";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

const CharacterContent = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleCharacterSelected = (character) => {
    setSelectedCharacter(character);
  };

  return (
    <div className="CharacterContent">
      <ErrorBoundary>
        <CharacterList onCharacterSelected={handleCharacterSelected} />
      </ErrorBoundary>

      <ErrorBoundary>
        <CharacterInfo character={selectedCharacter} />
      </ErrorBoundary>
    </div>
  );
};

export default CharacterContent;
