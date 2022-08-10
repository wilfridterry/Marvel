import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import Spinner from "../components/Spinner/Spinner";

const setContent = (process, Component, data) => {
  switch (process) {
    case "waiting":
      return null;
    case "loading":
      return <Spinner />;
    case "confirmed":
      return <Component data={data} />;
    case "error":
      return <ErrorMessage />;
    default:
      throw new Error("Unexpectd process state");
  }
};

export default setContent;