import React, { useState, useRef, useEffect, useCallback } from "react";

import AnonymousAvatar from "assets/avatar.png";
import CloseDrawer from "assets/next-session.png";
import { Root, MobileLocationList } from "components/SideDrawer/DrawerStyle";
import { useSelector } from "react-redux";

const SideDrawer = (props) => {
  const dummyHref = "#";
  const [showMobileLocation, setshowMobileLocation] = useState(false);
  const node = useRef();

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
  useEffect(() => {
    document.addEventListener("mousedown", handleOutside, false);
    return () => {
      document.removeEventListener("mousedown", handleOutside, false);
    };
  }, [props.showDrawer, handleOutside]);

  return (
    <Root className={props.showDrawer && "activeDrawer"}>
      <div ref={node} className="wrapMenuMobile customScroll">
        <div className="wrapFirst">
          {token ? (
            <a href={dummyHref}>
              <img src={AnonymousAvatar} className="btnAvatarMobile" alt="" />
              {userProfile.hoTen}
            </a>
          ) : (
            <a href={dummyHref}>
              <img src={AnonymousAvatar} className="btnAvatarMobile" alt="" />
              Đăng nhập
            </a>
          )}
          <img
            onClick={props.handleShowDrawer}
            src={CloseDrawer}
            className="close icon-arrow-right"
            alt=""
          />
        </div>
        <a href={dummyHref} className="menu">
          Lịch chiếu
        </a>
        <a href={dummyHref} className="menu">
          Cụm rạp
        </a>
        <a href={dummyHref} className="menu">
          Tin tức
        </a>
        <a href={dummyHref} className="menu">
          Ứng dụng
        </a>
        <a href={dummyHref} className="menu" onClick={showLocationDrawer}>
          Hồ Chí Minh
        </a>
        {token && (
          <a href={dummyHref} className="menu">
            Đăng xuất
          </a>
        )}
        {showMobileLocation && (
          <MobileLocationList>
            <div className="modal-dialog modal-location">
              <div className="modal-content customScroll">
                <div ref={node} className="modal-body">
                  <ul>{handleRenderList()}</ul>
                </div>
              </div>
            </div>
          </MobileLocationList>
        )}
      </div>
    </Root>
  );
};

export default SideDrawer;
