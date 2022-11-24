import { Children, Component } from "react";

export function Hello(props) {
  console.log("props", props);
  // let name = props.name;

  // name = "Jono";
  const greet = props;
  return (
    <div>
      <h1>Hello {props.name}</h1>
      <h2>Hello ya! {props.greet()} </h2>
    </div>
  );
}
export class HelloClass extends Component {
  render() {
    const props = this.props;
    // console.log("props", props);
    const { children, mobil } = this.props;
    return (
      <>
        <h1>
          Hello {mobil.name} {mobil.brand}
        </h1>
        <h2>Hello !</h2>
        {children}
      </>
    );
  }
}
