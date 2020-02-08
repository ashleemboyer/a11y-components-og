import React, { useState, useEffect, useRef } from "react";
import { Button } from "../";
import "./Dialog.css";

const Dialog = ({ title, closeDialog, openerRef, children }) => {
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
          <Button onClick={close}>Cancel</Button>
          <Button onClick={close}>Confirm</Button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
