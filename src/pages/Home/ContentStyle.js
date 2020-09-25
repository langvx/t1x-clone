const { default: styled } = require("styled-components");

export const Root = styled.div`
  margin-top: 60px; /** header height **/
  margin-left: auto;
  margin-right: auto;
  padding-left: 0;
  padding-right: 0;
  :before {
    display: table;
    content: "";
    clear: both;
  }
`;
