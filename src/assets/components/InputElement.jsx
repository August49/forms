import React from "react";
import PropTypes from "prop-types";

export default function InputElement({
  id,
  type,
  placeholder,
  register,
  errors,
  styles,
}) {
  return (
    <>
      <input
        type={type}
        className={styles}
        id={id}
        placeholder={placeholder}
        {...register(id)}
      />
      <div className="form-text">
        {errors[id] && (
          <span className="text-danger">{errors[id]?.message}</span>
        )}
      </div>
    </>
  );
}
