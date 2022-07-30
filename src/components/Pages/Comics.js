import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import ComicsList from "../ComicsList/ComicsList";
import Banner from "../Banner/Banner";

const Comics = () => {
  return (
    <div className="comics">
      <Banner />
      <ErrorBoundary>
        <ComicsList />
      </ErrorBoundary>
    </div>
  );
};

export default Comics;
