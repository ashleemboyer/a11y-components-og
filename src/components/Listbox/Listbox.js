import React from "react";

const Listbox = ({ options }) => (
  <>
    {options.map(option => (
      <p>{option}</p>
    ))}
  </>
);

export default Listbox;
