import { useEffect, useState } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Spinner from "../Spinner/Spinner";
import './SingleResource.scss';

const SingleResource = ({ children, loading, error, service, resourceId }) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    service(resourceId).then((resource) => setResource(resource));
  }, [resourceId]);

  const spinner = loading ? <Spinner /> : null;
  const errorMessage = error ? <ErrorMessage /> : null;

  const resourceData =
    !loading && !error && resource ? children(resource) : null;

  return (
    <div className="SingleResource">
      {spinner}
      {errorMessage}
      {resourceData}
    </div>
  );
};

export default SingleResource;
