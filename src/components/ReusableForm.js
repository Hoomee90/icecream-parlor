import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  const displayBlock = {
    display: "block",
    marginTop: "12px",
    marginBottom: "6px"
  }
  return (
    <form onSubmit={props.formSubmissionHandler}>
      <input
        type='text'
        name='name'
        placeholder='Flavor Name'
        style={displayBlock} />
      <textarea
        name='description'
        placeholder='Flavor Description'
        style={displayBlock} />
      <input
        name='price'
        type='number'
        placeholder='Price per scoop'
        style={displayBlock} />
      <input
        name="vegan"
        type="checkbox"
        id="vegan"
      />
      <label for="vegan">Vegan?</label>
      <button type='submit' style={displayBlock}>{props.buttonText}</button>
    </form>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;