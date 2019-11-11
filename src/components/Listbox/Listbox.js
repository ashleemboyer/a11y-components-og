import React, { useState } from "react";
import PropTypes from "prop-types";

import { Button } from "..";

import "./Listbox.css";

const focusElement = (element, setIndexOfSelectedOption) => {
  if (element.id.startsWith("option_")) {
    const indexToSelect = +element.id.substring("option_".length);
    setIndexOfSelectedOption(indexToSelect);
  }
};

const focusFirstOption = setIndexOfSelectedOption => {
  const listboxNode = document.getElementById("exp_elem_list");
  const firstOption = listboxNode.querySelector('[role="option"]');

  if (firstOption) {
    focusElement(firstOption, setIndexOfSelectedOption);
  }
};

const Listbox = ({ options, label }) => {
  const [expanded, setExpanded] = useState(false);
  const [indexOfSelectedOption, setIndexOfSelectedOption] = useState(-1);

  const ariaActiveDescendant =
    indexOfSelectedOption >= 0
      ? `option_${options[indexOfSelectedOption].value}`
      : "";

  return (
    <div className="listbox-area">
      <div className="left-area">
        <span id="exp_elem">Choose an element:</span>
        <div id="exp_wrapper">
          <button
            aria-activedescendant={ariaActiveDescendant}
            aria-expanded={expanded}
            aria-haspopup="listbox"
            aria-labelledby="exp_elem exp_button"
            id="exp_button"
            onClick={() => {
              setExpanded(!expanded);

              if (indexOfSelectedOption === -1) {
                focusFirstOption(setIndexOfSelectedOption);
              }
            }}
          >
            {
              options[indexOfSelectedOption === -1 ? 0 : indexOfSelectedOption]
                .label
            }
          </button>
          <ul
            id="exp_elem_list"
            tabIndex={expanded ? "0" : "-1"}
            role="listbox"
            aria-labelledby="exp_elem"
            className={expanded ? "" : "hidden"}
          >
            {options.map((option, index) => {
              const listItemId = `option_${index}`;
              return (
                <li
                  onClick={() => {
                    setIndexOfSelectedOption(index);
                    setExpanded(false);
                  }}
                  className={index === indexOfSelectedOption ? "focused" : ""}
                  id={listItemId}
                  key={listItemId}
                  role="option"
                  aria-selected={index === indexOfSelectedOption}
                >
                  {option.label}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

Listbox.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.any.isRequired
    })
  ).isRequired
};

export default Listbox;
