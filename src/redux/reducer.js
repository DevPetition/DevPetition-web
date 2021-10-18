const initialState = {
  login: {
    isLog: true,
    user: "소수연",
  },
  Demi: [
    {
      user: "배가영",
      id: "loveGT",
      password: "young",
    },
    {
      user: "신수민성",
      id: "love",
      password: "kids",
    },
  ],
};

export const LOGIN = "LOGIN";

const rootreducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        login: {
          ...state.login,
          isLog: true,
          user: action.name,
        },
      };
    default:
      return state;
  }
};

export default rootreducer;
