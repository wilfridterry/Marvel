import { Form, Formik, Field, ErrorMessage } from "formik";
import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import useMarvelService from "../../services/MarvelService";
import Button from "../Button/Button";

import "./SearchForm.scss";

const SearchForm = () => {
  const [character, setCharacter] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const { findCharacterByName, loading, error } = useMarvelService();

  const handleSubmit = useCallback((values, { setSubmitting }) => {
    findCharacterByName(values.name).then((character) => {
      setCharacter(character);
      setSubmitting(false);
      setNotFound(!character);
    });
  }, []);

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
      {({ values }) => {
        return (
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
                <ErrorMessage
                  name="name"
                  className="SearchForm-Title SearchForm__Error"
                  component="div"
                />

                {character && (
                  <div className="SearchForm-Title SearchForm__Success">
                    There is! Visit {character.name} page?
                  </div>
                )}

                {(error || notFound) && (
                  <div className="SearchForm-Title SearchForm__Error">
                    The characters was not found. Check the name and try again
                  </div>
                )}
              </fieldset>
              <fieldset className="SearchForm-Btns">
                <Button label="Find" disabled={loading} as="button" />
                {character && (
                  <Link to={`characters/${character.id}`} className="SearchForm-Anchor">
                    <Button label="To page" isGrey={true} as="button" style={{width: '100%'}}/>
                  </Link>
                )}
              </fieldset>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SearchForm;
