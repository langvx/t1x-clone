import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { SIGN_UP_SUCCESS, SIGN_UP_FAIL, SIGN_IN_FAIL } from "constants/AUTH";

import { ButtonGroup, Notice, Root, Message, Button, LI } from "./ModalStyle";

const SlightlyModal = (props) => {
  const dispatch = useDispatch();

  const backToLogin = useCallback(() => {
    dispatch({
      type: SIGN_UP_SUCCESS,
      payload: false,
    });
    dispatch({
      type: SIGN_UP_FAIL,
      payload: false,
    });
    dispatch({
      type: SIGN_IN_FAIL,
      payload: false,
    });
  }, [dispatch]);

  return (
    <Root>
      <Notice>
        <Message>{props.msg}</Message>
        <ButtonGroup>
          <LI>
            <button onClick={backToLogin}>Đóng</button>
          </LI>
          {!props.currentLogin && !props.currentSignUpFail && (
            <LI>
              <Button
                className="goToLogin"
                onClick={() => {
                  backToLogin();
                  props.setCurrentAction(0);
                  // window.location.reload(false);
                }}
              >
                Đăng nhập
              </Button>
            </LI>
          )}
        </ButtonGroup>
      </Notice>
    </Root>
  );
};

export default SlightlyModal;
