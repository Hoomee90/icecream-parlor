import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  const displayBlock = {
    display: "block",
    marginTop: "12px",
    marginBottom: "6px",
  }
  const radioLabel = {
    marginRight: "3px"
  }

  return (
    <form onSubmit={props.formSubmissionHandler}>
      <input
        required
        type='text'
        name='name'
        placeholder='Flavor Name'
        style={displayBlock} />
      <textarea
        required
        name='description'
        placeholder='Flavor Description'
        style={displayBlock} />
      <input
        required
        step={"0.1"}
        name='price'
        type='number'
        placeholder='Price per scoop'
        style={displayBlock} />
      <div>
        <input
          type="radio"
          id="vegan"
          name="vegan"
          value="true"
          style={radioLabel} />
        <label htmlFor="vegan">Vegan</label>
      </div>
      <div>
        <input
          type="radio"
          id="notVegan"
          name="vegan"
          value="false"
          style={radioLabel}
          defaultChecked />
        <label htmlFor="notVegan">Non Vegan</label>
      </div>

      <button type='submit' style={displayBlock}>{props.buttonText}</button>
    </form>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;