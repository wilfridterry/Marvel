import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import RandomCharacter from "../RandomCharacter/RandomCharacter";
import CharacterContent from "../CharacterContent/CharacterContent";

const Characters = () => {
    return (
      <div className="characters">
        <ErrorBoundary>
          <RandomCharacter />
        </ErrorBoundary>
        <CharacterContent />
      </div>
    );
  };

export default Characters;