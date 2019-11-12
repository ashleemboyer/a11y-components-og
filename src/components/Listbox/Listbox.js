import React, { useState } from "react";
import PropTypes from "prop-types";

import { Button } from "..";

import "./Listbox.css";

const getIndexOfOption = element => {
  const testString = "option_";
  if (element.id.startsWith(testString)) {
    return +element.id.substring(testString.length);
  }

  return -1;
};

const Listbox = ({ options, label }) => {
  const [expanded, setExpanded] = useState(false);
  const [indexOfSelectedOption, setIndexOfSelectedOption] = useState(-1);

  // TODO: this isn't very readable
  const ariaActiveDescendant =
    indexOfSelectedOption >= 0
      ? `option_${options[indexOfSelectedOption].value}`
      : "";

  const focusElement = element => {
    const indexToSelect = getIndexOfOption(element);
    if (indexToSelect >= 0) {
      setIndexOfSelectedOption(indexToSelect);
    }
  };

  const focusFirstOption = () => {
    const listboxNode = document.getElementById("exp_elem_list");
    const firstOption = listboxNode.querySelector('[role="option"]');

    if (firstOption) {
      focusElement(firstOption, setIndexOfSelectedOption);
    }
  };

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
                  onMouseEnter={({ target }) => {
                    target.className = "focused";
                  }}
                  onMouseLeave={({ target }) => {
                    target.className = "";
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
