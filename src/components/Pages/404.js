import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const goBack = () => {
    if (window.history.length > 2) {
      navigate(-1);
    }
    navigate("/", { replace: true });
  };

  return (
    <>
      <ErrorMessage />
      <p style={{ fontSize: 24, fontWeight: "bold", textAlign: "center" }}>
        Page Doesn't Exist
      </p>
      <div
        style={{
          display: "block",
          fontSize: 24,
          textAlign: "center",
          marginTop: 20,
          cursor: "pointer",
        }}
        onClick={goBack}
      >
        Go back
      </div>
    </>
  );
};

export default NotFound;
