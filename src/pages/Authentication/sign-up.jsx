import React, { useState, useCallback } from "react";
import { Button, Input } from "./AuthPageStyle";
import { signUp } from "actions/userAction";
import { useDispatch } from "react-redux";

export default () => {
  const [account, setAccount] = useState({
    taiKhoan: "",
    matKhau: "",
    hoTen: "",
    soDT: "",
    maNhom: process.env.REACT_APP_GROUP_SERIAL,
    email: "",
  });

  const dispatch = useDispatch();

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setAccount((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(signUp(account));
      resetInput();
    },
    [dispatch, account]
  );

  const resetInput = () => {
    document.getElementById("sign-up-form").reset();
  };

  return (
    <>
      <form id="sign-up-form" onSubmit={handleSubmit}>
        <Input
          onChange={handleInputChange}
          name="taiKhoan"
          placeholder="Tài khoản"
          required
        />
        <Input
          onChange={handleInputChange}
          name="matKhau"
          placeholder="Mật khẩu"
          type="password"
          required
        />
        <Input
          onChange={handleInputChange}
          name="hoTen"
          placeholder="Họ tên"
          required
        />
        <Input
          onChange={handleInputChange}
          name="soDT"
          type="number"
          placeholder="Số điện thoại"
          required
        />
        <Input
          onChange={handleInputChange}
          name="email"
          placeholder="Email"
          required
        />
        <Button>
          <button type="submit" className="btn btn-sep btn-4 icon-send">
            đăng ký
          </button>
        </Button>
      </form>
    </>
  );
};
