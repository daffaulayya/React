const CounterContainer = (props) => {
  const { children, label } = props;
  return (
    <>
      <p>{label}</p>
      <p>{children}</p>
    </>
  );
};

export default CounterContainer;
