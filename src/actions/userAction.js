import { axiosConnect } from "helpers/restConnector";
import {
  SET_TOKEN,
  SET_USER_PROFILE,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
  SIGN_IN_FAIL,
} from "constants/AUTH";

export const signIn = (data, history) => {
  return (dispatch) => {
    axiosConnect({
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap`,
      method: `POST`,
      data,
    })
      .then((res) => {
        /* console.log(`Is logged? `, res.statusText);
        console.log(`accessToken: `, res.data.accessToken); */
        const { hoTen, email, soDT } = res.data;
        const userDataString = JSON.stringify({ hoTen, email, soDT });
        const userData = { hoTen, email, soDT };
        localStorage.setItem("accessToken", res.data.accessToken);
        localStorage.setItem("userProfile", userDataString);
        dispatch({
          type: SET_TOKEN,
          payload: res.data.accessToken,
        });
        dispatch({
          type: SET_USER_PROFILE,
          payload: userData,
        });
        history.replace("/");
      })
      .catch((err) => {
        console.log(`An error occured: `, err.response.data);
        dispatch({
          type: SIGN_IN_FAIL,
          payload: err.response.data,
        });
      });
  };
};

export const signUp = (data) => {
  return (dispatch) => {
    axiosConnect({
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy`,
      method: `POST`,
      data: data,
    })
      .then((res) => {
        console.log(`Your account has been created!`, res);
        dispatch({
          type: SIGN_UP_SUCCESS,
          payload: true,
        });
      })
      .catch((err) => {
        console.log(`Error: `, err.response);
        dispatch({
          type: SIGN_UP_FAIL,
          payload: err.response.data,
        });
      });
  };
};
