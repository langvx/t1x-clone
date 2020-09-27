import React, { useState, useRef, useEffect, useCallback } from "react";

import AnonymousAvatar from "assets/avatar.png";
import CloseDrawer from "assets/next-session.png";
import {
  Root,
  MobileLocationList,
  UserName,
  DIV,
  UL,
  IMG,
  A,
} from "components/SideDrawer/DrawerStyle";
import { useSelector } from "react-redux";

import { useHistory } from "react-router-dom";

const SideDrawer = (props) => {
  const dummyHref = "#";
  const [showMobileLocation, setshowMobileLocation] = useState(false);
  const node = useRef();
  const history = useHistory();
  const userProfile = useSelector((state) => state.userData.profile);
  const token = useSelector((state) => state.userData.accessToken);

  let nodeDefault = node.current;

  const showLocationDrawer = (e) => {
    e.preventDefault();
    setshowMobileLocation((prevState) => !prevState);
  };

  const handleRenderList = () => {
    return props.data.map((locale, index) => (
      <li key={index}>
        <a href={dummyHref}>{locale}</a>
      </li>
    ));
  };

  const handleOutside = useCallback(
    (e) => {
      if (node.current.contains(e.target)) {
        return;
      }
      setshowMobileLocation(false);
      props.setShowDrawer(false);
      if (node.current === null) {
        node.current = nodeDefault;
      }
    },
    [nodeDefault, props]
  );

  const handleLogOut = (e) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      localStorage.setItem("accessToken", "");
    }
    window.location.reload();
    e.preventDefault();
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutside, false);
    return () => {
      document.removeEventListener("mousedown", handleOutside, false);
    };
  }, [props.showDrawer, handleOutside]);

  return (
    <Root className={props.showDrawer && "activeDrawer"}>
      <DIV ref={node} className="wrapMenuMobile customScroll">
        <DIV className="wrapFirst">
          {token ? (
            <UserName
              href={dummyHref}
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <IMG src={AnonymousAvatar} className="btnAvatarMobile" alt="" />
              {userProfile.hoTen}
            </UserName>
          ) : (
            <UserName
              href={dummyHref}
              onClick={(e) => {
                e.preventDefault();
                history.push("/auth");
              }}
            >
              <IMG src={AnonymousAvatar} className="btnAvatarMobile" alt="" />
              Đăng nhập
            </UserName>
          )}
          <IMG
            onClick={props.handleShowDrawer}
            src={CloseDrawer}
            className="close icon-arrow-right"
            alt=""
          />
        </DIV>
        <A href={dummyHref} className="menu">
          Lịch chiếu
        </A>
        <A href={dummyHref} className="menu">
          Cụm rạp
        </A>
        <A href={dummyHref} className="menu">
          Tin tức
        </A>
        <A href={dummyHref} className="menu">
          Ứng dụng
        </A>
        <A href={dummyHref} className="menu" onClick={showLocationDrawer}>
          Hồ Chí Minh
        </A>
        {token && (
          <A href={dummyHref} onClick={handleLogOut} className="menu">
            Đăng xuất
          </A>
        )}
        {showMobileLocation && (
          <MobileLocationList>
            <DIV className="modal-dialog modal-location">
              <DIV className="modal-content customScroll">
                <DIV ref={node} className="modal-body">
                  <UL>{handleRenderList()}</UL>
                </DIV>
              </DIV>
            </DIV>
          </MobileLocationList>
        )}
      </DIV>
    </Root>
  );
};

export default SideDrawer;
