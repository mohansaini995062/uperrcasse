import React, { useState } from "react";


export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  };

  const handleOnChange = (event) => {
    // console.log("on change ");
    setText(event.target.value);
    props.showAlert("Converted to newText", "success");
  };

  const handalCopy = () => {
    console.log("I am copy");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copiied to clipboard", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Space Remove", "success");
  };
  const [text, setText] = useState(" ");
  //   text= "new text"; //Wrong way to change the state
  //   setText("new text"); //correct way to change  the state
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={handleUpClick}
        >
          convert to Uppercase
        </button>
        <button
          type="button"
          className="btn btn-primary  mx-1"
          onClick={handleLoClick}
        >
          convert to Lowercase
        </button>
        <button
          type="button"
          className="btn btn-primary  mx-1"
          onClick={handleClearClick}
        >
          clear Text
        </button>
        <button
          type="button"
          className="btn btn-primary  mx-1"
          onClick={handalCopy}
        >
          Copy Text
        </button>
        <button
          type="button"
          className="btn btn-primary  mx-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} Words and {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}
