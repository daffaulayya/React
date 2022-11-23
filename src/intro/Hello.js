import { Component } from "react";

export function Hello() {
  return (
    <div>
      <h1>Hello Function Component!</h1>
      <h2>Hello 2</h2>
    </div>
  );
}
export class HelloClass extends Component {
  render() {
    return (
      <>
        <h1>Hello class Component!</h1>
        <h2>Hello 3</h2>
      </>
    );
  }
}
