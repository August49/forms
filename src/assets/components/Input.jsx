import PropTypes from "prop-types";
import Label from "./Label";
import InputElement from "./InputElement";

const Input = ({
  label,
  name,
  type,
  placeholder,
  register,
  errors,
  styles,
}) => (
  <div className="mb-3">
    <Label htmlFor={name} text={label} />
    <InputElement
      id={name}
      type={type}
      placeholder={placeholder}
      register={register}
      errors={errors}
      styles={styles}
    />
  </div>
);

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  styles: PropTypes.string,
};

Input.defaultProps = {
  type: "text",
  placeholder: "",
};

export default Input;
