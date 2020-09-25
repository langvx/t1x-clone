import React, { useState, useCallback } from "react";
import { Input, Button } from "./AuthPageStyle";
import { useDispatch } from "react-redux";
import { signIn } from "actions/userAction";
import { useHistory } from "react-router-dom";

export default () => {
  const [credential, setCredential] = useState({ taiKhoan: "", matKhau: "" });
  const dispatch = useDispatch();
  const history = useHistory();

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setCredential((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(signIn(credential, history));
      resetInput();
    },
    [dispatch, credential, history]
  );

  const resetInput = () => {
    document.getElementById("sign-in-form").reset();
  };

  return (
    <form id="sign-in-form" onSubmit={handleSubmit}>
      <Input
        onChange={handleInputChange}
        name="taiKhoan"
        placeholder="Tài khoản"
      />
      <Input
        onChange={handleInputChange}
        name="matKhau"
        placeholder="Mật khẩu"
        type="password"
      />
      <Button>
        <button type="submit" className="btn btn-sep btn-4 icon-send">
          đăng nhập
        </button>
      </Button>
    </form>
  );
};
