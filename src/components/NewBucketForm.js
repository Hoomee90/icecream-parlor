import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import ReusableForm from "./ReusableForm";

function NewBucketForm(props) {
  function handleNewBucketFormSubmission(event) {
    event.preventDefault();
    props.onNewBucketCreation({
      name: event.target.name.value,
      description: event.target.description.value,
      price: parseInt(event.target.price.value),
      vegan: event.target?.vegan.value ? true : false,
      quantity: 120,
      id: v4()
    });
  }
  return (
    <ReusableForm
      formSubmissionHandler={handleNewBucketFormSubmission}
      buttonText="Submit"
    />
  );
}

NewBucketForm.propTypes = {
  onNewBucketCreation: PropTypes.func
};

export default NewBucketForm;