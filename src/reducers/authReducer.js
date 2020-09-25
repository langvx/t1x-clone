import {
  SET_TOKEN,
  SET_USER_PROFILE,
  SIGN_UP_FAIL,
  SIGN_IN_FAIL,
  SIGN_UP_SUCCESS,
} from "constants/AUTH";

let initialState = {
  accessToken: "",
  profile: null,
  signUpSuccess: false,
  signUpFail: false,
  signInFail: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_TOKEN:
      return {
        ...state,
        accessToken: payload,
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: payload,
      };
    case SIGN_UP_FAIL:
      return { ...state, signUpFail: payload };
    case SIGN_UP_SUCCESS:
      return { ...state, signUpSuccess: payload };
    case SIGN_IN_FAIL:
      return { ...state, signInFail: payload };
    default:
      return state;
  }
};
