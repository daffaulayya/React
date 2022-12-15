import "./App.css";
import Button from "./Button";
import { useState, useCallback } from "react";
import DemoOutput from "./DemoOutput";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  const toggleParagraphHandler = useCallback(() => {
    setShowParagraph((prevshowParagraph) => !prevShowParagraph);
  }, []);

  console.log("App is running");

  return (
    <>
      <div className="app">
        <h1>hi there!</h1>
        <DemoOutput show={false} />
        {/* {showParagraph && <p>ini paragraf</p>} */}
        <Button onClick={toggleParagraphHandler}>Toggle</Button>
      </div>
    </>
  );
}

export default App;
