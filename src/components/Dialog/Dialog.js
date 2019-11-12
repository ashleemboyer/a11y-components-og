import React, { useState } from "react";

import { Button } from "../";

import "./Dialog.css";

const Dialog = ({ closeDialog }) => {
  return (
    <div id="dialog-background">
      <div id="dialog" role="dialog" aria-labelledby="dialog-label" aria-modal>
        <div id="dialog-header">
          <h2 id="dialog-label">Dialog title</h2>
        </div>
        <div id="dialog-body">
          <p>This is the body of the dialog.</p>
          <ul>
            <li>"Cancel" logs to the console</li>
            <li>"Confirm" logs to the console and closes the dialog</li>
          </ul>
        </div>
        <div id="dialog-footer">
          <Button
            onClick={() => {
              console.log("Clicked Cancel");
            }}
          >
            Cancel
          </Button>
          <Button onClick={closeDialog}>Confirm</Button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
