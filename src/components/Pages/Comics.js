import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import ComicsList from "../ComicsList/ComicsList";
import Banner from "../Banner/Banner";
import { Helmet } from "react-helmet";

const Comics = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content="Page with list of our comics" />
        <title>Comics page</title>
      </Helmet>
      <div className="comics">
        <Banner />
        <ErrorBoundary>
          <ComicsList />
        </ErrorBoundary>
      </div>
    </>
  );
};

export default Comics;
