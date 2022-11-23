/* 
JSX
> javascript xml
> memungkinkan tag html di fle js
> untuk mencetak variable menggunakan kurawal (curly braces), termasuk function.
*/
import "./index.css";
import styles from "./styles.module.css";

const helloStyle = {
  fontSize: "14px",
};

const name = "World";
const hello = <h1 style={helloStyle}>Hello React</h1>;
const greet = <h1 className="greet">Hello, {name}</h1>;

const greetHello = (name) => {
  return (
    <h1 className={styles.greet}>Hello, {name}! Welcome to react Project </h1>
  );
};

export { hello, greet, greetHello };
