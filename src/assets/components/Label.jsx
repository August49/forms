import React from "react";
import PropTypes from "prop-types";

export default function Label({ htmlFor, text }) {
  return (
    <label htmlFor={htmlFor} className="form-label">
      {text}
    </label>
  );
}
Label.propTypes = {
  label: PropTypes.string,
  text: PropTypes.string,
};
