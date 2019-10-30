import React from "react";
import PropTypes from "prop-types";

const Listbox = ({ options }) => (
  <>
    {options.map(option => (
      <p>{`${option.label} (${option.value})`}</p>
    ))}
  </>
);

Listbox.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.any.isRequired
    })
  ).isRequired
};

export default Listbox;
