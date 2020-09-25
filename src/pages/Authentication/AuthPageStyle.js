import styled from "styled-components";
import { Tabs } from "react-tabs";

export const Background = styled.div`
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
  margin-top: -${(props) => props.theme.spacing.xl};
  background-size: contain;
  background-position: center;
  margin: ${(props) => props.theme.spacing.none} auto;
  float: left;
  /* padding: 0 calc(50% - 430px); */
`;

export const SignWrapper = styled.div`
  max-width: 360px;
  padding: ${(props) => props.theme.spacing.lg}
    ${(props) => props.theme.spacing.none + 32}px
    ${(props) => props.theme.spacing.md};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-image: linear-gradient(
    to bottom,
    rgba(20, 50, 93, 0.9),
    rgba(8, 22, 48, 0.9)
  );
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.45);
  text-align: center;
  color: #fff;
  border-radius: 6px;
  z-index: 997;
`;

export const SignHeader = styled.img`
  width: 209px;
  margin-bottom: 96px;
  cursor: pointer;
`;

export const BackToHomeButton = styled.div`
  opacity: 1;
  position: absolute;
  top: -18px;
  right: -18px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #081630;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.5);
  content: "";
  cursor: pointer;
  overflow-x: initial;
  :before {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
  :after {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  :before,
  :after {
    content: "";
    display: block;
    border-left: 2px solid #455570;
    width: 2px;
    height: 16px;
    position: absolute;
    top: 50%;
    left: 50%;
  }
`;

export const LoginControler = styled.div`
  float: left;
  width: 100%;
  margin-top: ${(props) => props.theme.spacing.sm};
`;

export const Tabz = styled(Tabs)`
  ul li {
    width: 50%;
    font-weight: 700;
    color: ${(props) => props.theme.colors.white};
    padding-top: ${(props) => props.theme.spacing.xs};
    padding-bottom: ${(props) => props.theme.spacing.xs};
    padding-right: ${(props) => props.theme.spacing.sm};
    padding-left: ${(props) => props.theme.spacing.sm};
    user-select: none;
  }

  @media (max-width: ${(props) => props.theme.screen.md}) {
    ul li {
      font-size: ${(props) => props.theme.font.size.xs};
    }
  }

  ul li:focus {
    box-shadow: none;
    border-color: transparent;
    outline: none;
  }
  ul li:focus:after {
    height: 0;
  }
  li.react-tabs__tab--selected {
    background: rgb(64, 100, 183);
    border-color: transparent;
  }
`;

export const Input = styled.input`
  border-style: solid;
  padding: ${(props) => props.theme.spacing.xs};
  font-size: ${(props) => props.theme.font.size.sm};
  text-align: center;
  border-width: 0px;
  border-radius: 5px;
  border-color: #d173d1;
  box-shadow: 0px 0px 7px 0px rgba(42, 42, 42, 0.32);
  text-shadow: 0px 0px 0px rgba(42, 42, 42, 0.75);
  width: 100%;
  margin: ${(props) => props.theme.spacing.xs} 0;
  :focus {
    outline: none;
  }
`;

export const Button = styled.div`
  margin-top: ${(props) => props.theme.spacing.xs};
  .btn {
    border: none;
    font-size: inherit;
    color: inherit;
    background: none;
    cursor: pointer;
    padding: 25px 80px;
    display: inline-block;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 700;
    outline: none;
    position: relative;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
    font-family: "Nunito Sans", sans-serif !important;
    width: 100%;
  }

  .btn:after {
    content: "";
    position: absolute;
    z-index: -1;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
  }

  /* Pseudo elements for icons */
  .btn:before {
    font-family: "FontAwesome";
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    position: relative;
    -webkit-font-smoothing: antialiased;
  }

  /* Icon separator */
  .btn-sep {
    padding: 25px 60px 25px 120px;
  }

  .btn-sep:before {
    background: rgba(0, 0, 0, 0.15);
  }
  .btn-4 {
    background: #34495e;
    color: #fff;
  }

  .btn-4:hover {
    background: #2c3e50;
  }

  .btn-4:active {
    background: #2c3e50;
    top: 2px;
  }

  .btn-4:before {
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    line-height: 3;
    font-size: 140%;
    width: 60px;
  }

  .icon-send:before {
    content: "\f1d8";
  }
`;
