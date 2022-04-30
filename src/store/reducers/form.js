let initialForm = {
  name: "precious",
  password: "rasengan",
};
const formReducer = (state = initialForm, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        name: "Preshy Jones",
      };
    default:
      return state;
  }
};

export default formReducer;
