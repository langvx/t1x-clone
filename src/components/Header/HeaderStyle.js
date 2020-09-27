import styled from "styled-components";

export const Root = styled.div`
  position: fixed;
  top: -1px;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  z-index: 9;
  transition: all 0.2s;
  .activeDrawer {
    background-color: rgba(0, 0, 0, 0.8);
    pointer-events: inherit;
  }
  .activeDrawer .wrapMenuMobile {
    right: 0;
  }
`;

export const Logo = styled.img`
  position: absolute;
  top: 50%;
  left: ${(p) => p.theme.spacing.sm};
  transform: translateY(-50%);
  width: 50px;
`;

export const Navigation = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  a {
    font-weight: 600;
    font-size: ${(p) => p.theme.font.size.sm};
    color: ${(p) => p.theme.colors.black};
    transition: all 0.2s;
    text-decoration: none;
    margin-right: ${(p) => p.theme.spacing.sm};
  }
  a:hover {
    color: ${(p) => p.theme.colors.secondary.main};
  }
  @media (max-width: ${(p) => p.theme.screen.md}) {
    display: none;
  }
`;

export const LogOut = styled.div`
  position: absolute;
  top: 70%;
  text-align: center;
  width: 100%;
  padding: 5px;
  transition: background-color 0.2s ease;
  background: #959595;
  border-radius: 4px;
  color: whitesmoke;
  display: none !important;
`;

export const UserCP = styled.div`
  position: absolute;
  top: 50%;
  right: ${(p) => p.theme.spacing.none + 15}px;
  transform: translateY(-50%);
  user-select: none;
  div {
    display: table-cell;
    vertical-align: middle;
  }
  /* #account:hover {
    ${LogOut} {
      display: block !important;
    }
  }
  #account {
    position: relative;
    padding-right: ${(p) => p.theme.spacing.xs};
    cursor: pointer;
    height: 120px;
  }
  #account:after {
    content: "";
    position: absolute;
    right: ${(p) => p.theme.spacing.none};
    height: 30px;
    top: 50%;
    transform: translateY(-50%);
    border-right: 1px solid #fff;
    border-right-color: #e9e9e9;
  }
  #account .titleDisplay {
    color: #9b9b9b;
    margin: inherit;
    font-size: 13px;
  }
  #account .titleDisplay img {
    height: auto;
    width: 30px;
    border-radius: 25px;
    margin-right: ${(p) => p.theme.spacing.xxs};
    vertical-align: middle;
  }
  #account .titleDisplay p {
    margin: 0;
    display: inline-block;
  } */
  @media (max-width: ${(p) => p.theme.screen.md}) {
    display: none;
  }
`;

export const Account = styled.div`
  position: relative;
  padding-right: ${(p) => p.theme.spacing.xs};
  cursor: pointer;
  height: 120px;

  :hover {
    ${LogOut} {
      display: block !important;
    }
  }

  :after {
    content: "";
    position: absolute;
    right: ${(p) => p.theme.spacing.none};
    height: 30px;
    top: 50%;
    transform: translateY(-50%);
    border-right: 1px solid #fff;
    border-right-color: #e9e9e9;
  }

  .titleDisplay {
    color: #9b9b9b;
    margin: inherit;
    font-size: 13px;
  }

  .titleDisplay img {
    height: auto;
    width: 30px;
    border-radius: 25px;
    margin-right: ${(p) => p.theme.spacing.xxs};
    vertical-align: middle;
  }

  .titleDisplay p {
    margin: 0;
    display: inline-block;
  }
`;

export const Location = styled.div`
  padding: 0 125px 0 8px;
  position: relative;
`;

export const LocationHeader = styled.img`
  position: relative;
  opacity: 0.5;
`;

export const P = styled.p`
  vertical-align: middle;
  padding: 0 8px;
`;

export const A = styled.a``;

export const IMG = styled.img``;
