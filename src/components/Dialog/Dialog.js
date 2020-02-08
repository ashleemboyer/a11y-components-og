import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Button } from "../";
import "./Dialog.css";

const Dialog = ({
  title,
  closeDialog,
  openerRef,
  primaryButton,
  secondaryButton,
  children
}) => {
  const dialogRef = useRef();
  const [listenersAdded, setListenersAdded] = useState(false);

  const close = () => {
    openerRef.current.focus();
    closeDialog();
  };

  useEffect(() => {
    if (listenersAdded) {
      return;
    }

    if (dialogRef.current) {
      const focusableElements = dialogRef.current.querySelectorAll(
        "button,select"
      );
      const firstFocusableElement = focusableElements[0];
      const lastFocusableElement =
        focusableElements[focusableElements.length - 1];
      firstFocusableElement.focus();

      firstFocusableElement.addEventListener("keydown", e => {
        if (e.keyCode === 9 && e.shiftKey) {
          e.preventDefault();
          lastFocusableElement.focus();
        }
      });

      lastFocusableElement.addEventListener("keydown", e => {
        if ((e.keyCode === 9) & !e.shiftKey) {
          e.preventDefault();
          firstFocusableElement.focus();
        }
      });

      dialogRef.current.addEventListener("keydown", e => {
        if (e.keyCode === 27) {
          e.preventDefault();
          closeDialog();
        }
      });

      setListenersAdded(true);
    }
  });

  return (
    <div id="dialog-background">
      <div
        id="dialog"
        role="dialog"
        aria-labelledby="dialog-label"
        aria-modal
        ref={dialogRef}
      >
        <div id="dialog-header">
          <h2 id="dialog-label">{title}</h2>
        </div>
        <div id="dialog-body">{children}</div>
        <div id="dialog-footer">
          {secondaryButton && (
            <Button onClick={secondaryButton.onClick}>
              {secondaryButton.text}
            </Button>
          )}
          {primaryButton && (
            <Button onClick={primaryButton.onClick}>
              {primaryButton.text}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

Dialog.propTypes = {
  title: PropTypes.string.isRequired,
  closeDialog: PropTypes.func.isRequired,
  openerRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ]).isRequired,
  primaryButton: PropTypes.shape({
    text: PropTypes.string,
    onClick: PropTypes.func
  }).isRequired,
  secondaryButton: PropTypes.shape({
    text: PropTypes.string,
    onClick: PropTypes.func
  }),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Dialog;
