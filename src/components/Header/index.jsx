import React, { useState } from "react";

import TixLogo from "assets/web-logo.png";
import AnonymousAvatar from "assets/avatar.png";
import LocationIco from "assets/location-header.png";

import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import {
  Root,
  Logo,
  Navigation,
  UserCP,
  Location,
  LocationHeader,
  LogOut,
  Account,
  P,
  A,
  IMG,
} from "./HeaderStyle";

import DropdownMenu from "components/Dropdown";
import Hamburger from "components/Hamburger";
import SideDrawer from "components/SideDrawer";

const Header = () => {
  const locationData = useSelector((state) => state.locationData);
  const token = useSelector((state) => state.userData.accessToken);
  const userProfile = useSelector((state) => state.userData.profile);
  const [showDrawer, setShowDrawer] = useState(false);

  const handleShowDrawer = () => {
    setShowDrawer((prevState) => !prevState);
  };

  const handleLogOut = (e) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      localStorage.setItem("accessToken", "");
    }
    window.location.reload();
    e.preventDefault();
  };

  return (
    <Root>
      <NavLink to="/" exact>
        <Logo src={TixLogo} alt="tix" />
      </NavLink>
      <Navigation>
        <A href="schedule">Lịch chiếu</A>
        <A href="theatre">Cụm rạp</A>
        <A href="news">Tin tức</A>
        <A href="app">Ứng dụng</A>
      </Navigation>
      <UserCP>
        <Account id="account">
          {token ? (
            <NavLink to="/usercp" className="titleDisplay">
              <IMG src={AnonymousAvatar} alt="" />
              <P>{userProfile.hoTen}</P>
              <LogOut onClick={handleLogOut}>Đăng xuất</LogOut>
            </NavLink>
          ) : (
            <NavLink to="/auth" className="titleDisplay">
              <IMG src={AnonymousAvatar} alt="" />
              <P>Đăng nhập</P>
            </NavLink>
          )}
        </Account>
        <Location>
          <LocationHeader src={LocationIco} alt="" />
          <DropdownMenu data={locationData} />
        </Location>
      </UserCP>
      <div onClick={handleShowDrawer}>
        <Hamburger />
      </div>
      <SideDrawer
        showDrawer={showDrawer}
        setShowDrawer={setShowDrawer}
        handleShowDrawer={handleShowDrawer}
        data={locationData}
      />
    </Root>
  );
};

export default Header;
