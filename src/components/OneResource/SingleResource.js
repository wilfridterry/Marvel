import { useEffect, useState } from "react";
import setContent from "../../utils/setContent";
import "./SingleResource.scss";

const SingleResource = ({
  children,
  process,
  setProcess,
  service,
  resourceId,
}) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    service(resourceId)
      .then((resource) => setResource(resource))
      .then(() => setProcess("confirmed"));
  }, [resourceId]);

  return (
    <div className="SingleResource">
      {setContent(process, () => children(resource))}
    </div>
  );
};

export default SingleResource;
