import React from "react";

const DemoOutput = (props) => {
  console.log("DemoOuput render.");
  return (
    <p>
      <button onClick={props.showOutput}>Show Demo</button>
      <br />
      {props.show && "Open the console and click the increment button."}
    </p>
  );
};

export default React.memo(DemoOutput);
