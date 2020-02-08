import React, { useState, useRef } from "react";
import { Dialog, Button } from "./components";

const App = () => {
  const openDialogRef = useRef();
  const [showDialog, setShowDialog] = useState(false);

  return (
    <div>
      <Button
        providedRef={openDialogRef}
        onClick={() => {
          if (!showDialog) {
            setShowDialog(true);
          }
        }}
      >
        Open Dialog
      </Button>
      <Button onClick={() => {}}>Hi</Button>
      <Button onClick={() => {}}>I'm a Button</Button>
      {showDialog && (
        <Dialog
          title="Hello, Dialog!"
          openerRef={openDialogRef}
          primaryButton={{
            text: "Okie dokie",
            onClick: () => {
              setShowDialog(false);
            }
          }}
          secondaryButton={{
            text: "Nope",
            onClick: () => {
              console.log("clicked nope");
            }
          }}
          closeDialog={() => {
            setShowDialog(false);
          }}
        >
          <p>This is the body of the dialog.</p>
          <ul>
            <li>"Cancel" closes the dialog</li>
            <li>"Confirm" also closes the dialog</li>
          </ul>
          <Button onClick={() => {}}>This is a random button</Button>
        </Dialog>
      )}
    </div>
  );
};

export default App;
