import { useParams } from "react-router-dom";
import useMarvelService from "../../services/MarvelService";
import SingleResource from "../OneResource/SingleResource";

const SingleCharacter = () => {
  const { getCharacter, loading, error } = useMarvelService();
  const { characterId } = useParams();

  return (
    <SingleResource
      loading={loading}
      error={error}
      service={getCharacter}
      resourceId={characterId}
    >
      {({thumbnail, name, description}) => {
        return (
          <>
            <img src={thumbnail} alt={name} />
            <div className="SingleResource-Details">
              <div className="SingleResource-Title">{name}</div>
              <div className="SingleResource-Descr">{description}</div>
            </div>
          </>
        );
      }}
    </SingleResource>
  );
};

export default SingleCharacter;
