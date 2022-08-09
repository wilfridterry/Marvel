import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import RandomCharacter from "../RandomCharacter/RandomCharacter";
import CharacterContent from "../CharacterContent/CharacterContent";
import { Helmet } from "react-helmet";

const Characters = () => {
    return (
     <>
      <Helmet>
        <meta name="description" content="Marvel"/>
        <title>Marvel Characters</title>
      </Helmet>
       <div className="characters">
        <ErrorBoundary>
          <RandomCharacter />
        </ErrorBoundary>
        <CharacterContent />
      </div>
     </>
    );
  };

export default Characters;