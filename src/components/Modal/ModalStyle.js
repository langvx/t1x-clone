import styled from "styled-components";

export const Root = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8));
  border-radius: 5px;
  z-index: 998;
`;

export const Notice = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  max-width: 480px;
  height: 180px;
  background: ${(props) => props.theme.colors.body};
  transform: translate(-50%, -50%);
  z-index: 999;
  color: ${(props) => props.theme.colors.white};
  border: none;
  border-radius: 0.25em 0.25em 0.4em 0.4em;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  transition-duration: 0.3s;
  transition-property: transform;
  text-align: center;
  color: #8f9cb5;
  overflow: hidden;
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    max-width: 380px;
  }
  @media (max-width: 420px) {
    max-width: 280px;
  }
`;

export const Message = styled.p`
  padding: 3em 1em;
  font-size: ${(props) => props.theme.font.size.md};
  color: ${(props) => props.theme.colors.text.secondary};
  font-weight: 600;
`;

export const ButtonGroup = styled.ul`
  position: absolute;
  width: 100%;
  height: 30%;
  bottom: 0;
  align-items: center;
  justify-content: center;
  display: flex;
  li {
    list-style-type: none;
    text-align: center;
    width: 100%;
    height: 100%;
    button {
      font-size: ${(props) => props.theme.font.size.md};
      width: 100%;
      height: 100%;
      border: none;
      outline: none;
      font-weight: 600;
      transition: 0.3s;
      cursor: pointer;
    }
    button:hover {
      background: #fa5238;
      color: ${(props) => props.theme.colors.white};
    }
    button.goToLogin {
      background: #fb4226;
      color: ${(props) => props.theme.colors.white};
    }
    button.goToLogin:hover {
      background: #ce3017;
    }
  }
`;

export const LI = styled.li``;
export const Button = styled.button``;
