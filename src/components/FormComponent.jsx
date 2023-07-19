import React from "react";
import PropTypes from "prop-types";

function FormComponent({ onSubmit, children }) {
  return (
    <form className="m-4" onSubmit={onSubmit}>
      {children}
    </form>
  );
}

FormComponent.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default FormComponent;
