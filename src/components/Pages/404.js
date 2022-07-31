import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <ErrorMessage />
      <p style={{ fontSize: 24, fontWeight: "bold", textAlign: "center" }}>
        Page Doesn't Exist
      </p>
      <Link style={{display: "block", fontSize: 24, textAlign: "center", marginTop: 20}} to="/">Back to main page</Link>
    </>
  );
};

export default NotFound;
