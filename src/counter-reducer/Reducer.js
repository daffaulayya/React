export const initialState = {
  count: 0,
};

export function counterReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload }; //referensi object state
    case "decrement":
      return { ...state, count: state.count - action.payload };
    case "multiply":
      return { ...state, count: state.count * action.payload };
    case "devide":
      return { ...state, count: state.count / action.payload };
    case "reset":
      return initialState;
    default:
      return { ...state };
  }
}
