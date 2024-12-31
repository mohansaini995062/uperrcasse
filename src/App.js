import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
// import About from "./components/About";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light"); //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (Message, type) => {
    setAlert({
      msg: Message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        about="about"
      />
      <Alert alert={alert} />
      <div className="container my-3"></div>
      <TextForm
        showAlert={showAlert}
        heading="Enter the text to analyze"
        mode={mode}
      />
    </>
  );
}

export default App;
