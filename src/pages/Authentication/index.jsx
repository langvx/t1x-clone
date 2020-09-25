// User auth index
import React, { useCallback, useState } from "react";

import SignIn from "./sign-in";
import SignUp from "./sign-up";
import SlightlyModal from "components/Modal";

import {
  Background,
  BackToHomeButton,
  SignHeader,
  SignWrapper,
  LoginControler,
  Tabz,
} from "./AuthPageStyle";
import bgSrc from "assets/bg2.jpg";
import tixSignLogo from "assets/group@2x.png";

import { Tab, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Auth = () => {
  const signUpSuccess = useSelector((state) => state.userData.signUpSuccess);
  const signUpFail = useSelector((state) => state.userData.signUpFail);
  const signInFail = useSelector((state) => state.userData.signInFail);
  const history = useHistory();
  const [currentAction, setCurrentAction] = useState(0);

  const backToHome = useCallback(() => {
    history.replace("/");
  }, [history]);

  return (
    <Background style={{ backgroundImage: `url(${bgSrc})` }}>
      <SignWrapper>
        <SignHeader src={tixSignLogo} alt="" />
        <div>
          Đăng nhập để được nhiều ưu đãi, mua vé
          <br />
          và bảo mật thông tin!
        </div>
        <LoginControler>
          <Tabz
            selectedIndex={currentAction}
            onSelect={(state) => setCurrentAction(state)}
          >
            <TabList>
              <Tab>Đăng nhập</Tab>
              <Tab>Đăng ký</Tab>
            </TabList>
            <TabPanel>
              <SignIn />
            </TabPanel>
            <TabPanel>
              <SignUp />
            </TabPanel>
          </Tabz>
        </LoginControler>
        <BackToHomeButton onClick={backToHome} />
      </SignWrapper>
      {signUpSuccess && (
        <SlightlyModal
          setCurrentAction={setCurrentAction}
          currentAction={currentAction}
          msg="Tạo tài khoản thành công !"
        />
      )}
      {signInFail && <SlightlyModal currentLogin={true} msg={signInFail} />}
      {signUpFail && (
        <SlightlyModal currentSignUpFail={true} msg={signUpFail} />
      )}
    </Background>
  );
};

export default Auth;
