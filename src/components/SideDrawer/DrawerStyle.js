import styled from "styled-components";

export const Root = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  pointer-events: none;
  z-index: 10;
  overflow: hidden;
  transition: all 0.4s;
  .wrapMenuMobile {
    position: absolute;
    top: 0;
    right: -70%;
    width: 70%;
    height: 100%;
    background: #fff;
    transition: all 0.4s;
    overflow: hidden;
    overflow-y: scroll;
  }
  .wrapFirst {
    padding: ${(p) => p.theme.spacing.xs};
    position: relative;
    a {
      text-decoration: none;
      color: #000;
      cursor: pointer;
      transition: all 0.2s;
    }
  }
  .wrapFirst img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
  .btnAvatarMobile {
    margin-left: ${(p) => p.theme.spacing.xxs};
    margin-right: ${(p) => p.theme.spacing.xxs};
  }

  .customScroll::-webkit-scrollbar {
    width: 4px;
    background-color: #e8e3e3;
  }

  .customScroll::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  .customScroll::-webkit-scrollbar-track {
    border-radius: 7px;
  }

  .close {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    opacity: 1;
  }

  .menu {
    display: block;
    padding: ${(p) => p.theme.spacing.sm};
    position: relative;
    width: calc(100% - 40px);
    font-size: 18px;
    color: #000;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.2s;
  }
`;

export const MobileLocationList = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1050;
  display: block;
  overflow: hidden;
  outline: 0;
  opacity: 1;
  transition: opacity 0.15s linear;
  pointer-events: initial;
  .in {
    opacity: 1;
  }
  .in .modal-dialog {
    transform: translate(0, 0);
  }
  .modal-location {
    height: 100%;
    padding: ${(p) => p.theme.spacing.sm};
  }
  .modal-dialog {
    position: relative;
    width: auto;
    margin: ${(p) => p.theme.spacing.xs};
  }
  .modal.fade .modal-dialog {
    transition: transform 0.3s ease-out;
    transform: translate(0, -25%);
  }
  .modal-location .modal-content {
    height: 97%;
  }
  .modal-content {
    position: relative;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    outline: 0;
    box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
  }
  .modal-body {
    position: relative;
    padding: ${(p) => p.theme.spacing.none + 15}px;
  }
  .modal-location .modal-content ul {
    padding-left: 0;
    height: 100%;
    margin-top: ${(p) => p.theme.spacing.sm};
    text-align: center;
    margin-bottom: ${(p) => p.theme.spacing.xs};
  }
  .modal-location .modal-content ul li {
    margin-bottom: ${(p) => p.theme.spacing.xxs};
    height: 40px;
    display: block;
    font-size: ${(p) => p.theme.font.size.md};
    color: ${(p) => p.theme.colors.text.primary};
    font-weight: bold;
    border-bottom: 1px solid #ebebec;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    padding-top: ${(p) => p.theme.spacing.xxs};
  }
  .modal-location .modal-content ul li a {
    color: ${(p) => p.theme.colors.text.primary};
  }
`;

export const UserName = styled.a`
  width: 70%;
  display: block;
`;

export const DIV = styled.div``;
export const UL = styled.ul``;
export const A = styled.a``;
export const IMG = styled.img``;
