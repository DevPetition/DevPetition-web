const initialState = {
  login: false,
};

export const LOGIN = "LOGIN";

const rootreducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        login: true,
      };
    default:
      return state;
  }
};

export default rootreducer;
