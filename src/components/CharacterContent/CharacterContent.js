import "./CharacterContent.scss";
import CharacterList from "../CharacterList/CharacterList";
import CharacterInfo from "../CharacterInfo/CharacterInfo";
import { memo, useCallback, useState } from "react";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import SearchForm from "../SearchForm/SearchForm";

const MemoizedCharacterList = memo(CharacterList);
const MemoizedCharacterInfo = memo(CharacterInfo);

const CharacterContent = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const [count, setCount] = useState(0); // For test memoization components

  const handleCharacterSelected = useCallback(character => {
    setSelectedCharacter(character);
    setCount(count => count + 1);
  }, []);

  return (
    <div className="CharacterContent">
      <ErrorBoundary>
        <MemoizedCharacterList onCharacterSelected={handleCharacterSelected} />
      </ErrorBoundary>

      <ErrorBoundary>
        <div>
          <MemoizedCharacterInfo character={selectedCharacter} />
          <SearchForm />
        </div>
      </ErrorBoundary>
    </div>
  );
};

export default CharacterContent;
