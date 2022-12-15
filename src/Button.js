import "./Button.css";

const Button = (props) => {
  const buttonProps = { ...props, className: `button ${props.className}` };
  return <button {...buttonProps}>{props.children}</button>;
};

export default Button;
