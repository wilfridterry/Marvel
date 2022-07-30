import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import RandomCharacter from "../RandomCharacter/RandomCharacter";
import CharacterContent from "../CharacterContent/CharacterContent";
import vision from "../../resources/img/vision.png";

const Home = () => {
    return (
      <div className="characters">
        <ErrorBoundary>
          <RandomCharacter />
        </ErrorBoundary>
        <CharacterContent />
        {/* <img src={vision} alt="Vision" className="App-Decor" /> */}
      </div>
    );
  };

export default Home;