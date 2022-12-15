import { useState } from "react";

const Greeting = () => {
  const [text, setText] = useState(false);
  const changeTextHandler = () => {
    setText(true);
  };
  return (
    <>
      <h1>Hello World!</h1>
      {!text && <p>It's good to see you</p>}
      {text && <p>Change</p>}
      <button onClick={changeTextHandler}>Changed!</button>
    </>
  );
};

export default Greeting;
