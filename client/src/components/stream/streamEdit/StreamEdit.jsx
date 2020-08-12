import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import { Button, Box, LinearProgress, Grid } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import { getStream, editStream } from "../../../redux/actions/streamActions";

const StreamEdit = (props) => {
  const dispatch = useDispatch();

  const streamList = useSelector(
    (state) => state.streamList[props.match.params.id]
  );

  useEffect(() => {
    dispatch(getStream(props.match.params.id));
    return () => {};
  }, [dispatch, props.match.params.id]);

  if (!streamList) {
    return <div>Loading. .. ...</div>;
  }
  return (
    <Formik
      initialValues={{
        title: streamList.title,
        description: streamList.description,
      }}
      validate={(values) => {
        const errors = {};
        if (!values.title) {
          errors.title = "Required";
        } else if (values.title.length < 4) {
          errors.title = "Title should be at least 4 characters long";
        }
        if (!values.description) {
          errors.description = "Required";
        } else if (values.description.length < 11) {
          errors.description =
            "description should be at least 10 characters long";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          dispatch(editStream(streamList.id, values));
        }, 500);
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Grid container justify="center">
          <Grid item xs={11} sm={9} md={6} lg={4}>
            <Form>
              <Box margin={2} mt={5}>
                <Field
                  component={TextField}
                  name="title"
                  variant="outlined"
                  label="Title"
                  fullWidth
                  autoComplete="off"
                />
              </Box>
              <Box margin={2}>
                <Field
                  component={TextField}
                  multiline
                  rowsMax={3}
                  label="Description"
                  name="description"
                  variant="outlined"
                  fullWidth
                />
              </Box>
              {isSubmitting && <LinearProgress />}
              <br />
              <Box margin={2}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  disabled={isSubmitting}
                  onClick={submitForm}
                >
                  Submit
                </Button>
              </Box>
            </Form>
          </Grid>
        </Grid>
      )}
    </Formik>
  );
};

export default StreamEdit;
