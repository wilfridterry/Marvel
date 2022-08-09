import {
  Form,
  Formik,
  Field,
  ErrorMessage as FormikErrorMessage,
} from "formik";
import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import useMarvelService from "../../services/MarvelService";
import Button from "../Button/Button";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

import "./SearchForm.scss";

const SearchForm = () => {
  const [character, setCharacter] = useState({});
  const { findCharacterByName, loading, error, clearError } =
    useMarvelService();

  const handleSubmit = useCallback((values, { setSubmitting }) => {
    clearError();
    findCharacterByName(values.name).then((character) => {
      setCharacter(character);
      setSubmitting(false);
    });
  }, []);

  const errorMessage = error ? <ErrorMessage /> : null;

  return (
    <Formik
      initialValues={{
        name: "",
      }}
      validationSchema={yup.object({
        name: yup.string().min(2).required(),
      })}
      onSubmit={handleSubmit}
    >
      <Form className="SearchForm">
        <h4 className="SearchForm-Title">Or find a character by name:</h4>
        <div className="SearchForm-Group">
          <fieldset>
            <Field
              type="text"
              name="name"
              className="SearchForm-Input"
              placeholder="Enter name"
            />
            <FormikErrorMessage
              name="name"
              className="SearchForm-Title SearchForm__Error"
              component="div"
            />

            {character && Object.keys(character).length !== 0 && (
              <div className="SearchForm-Title SearchForm__Success">
                There is! Visit {character.name} page?
              </div>
            )}

            {(error || character === null) && (
              <div className="SearchForm-Title SearchForm__Error">
                There are no characters wit input name. Check the name and try
                again
              </div>
            )}
          </fieldset>
          <fieldset className="SearchForm-Btns">
            <Button label="Find" disabled={loading} as="button" />
            {character && Object.keys(character).length !== 0 && (
              <Link
                to={`characters/${character.id}`}
                className="SearchForm-Anchor"
              >
                <Button
                  label="To page"
                  isGrey={true}
                  as="button"
                  style={{ width: "100%" }}
                />
              </Link>
            )}
          </fieldset>
        </div>
        {errorMessage}
      </Form>
    </Formik>
  );
};

export default SearchForm;
