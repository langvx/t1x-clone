import styled from "styled-components";

export const Title = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  background-color: transparent;
  border: none;
  color: #9b9b9b;
  cursor: pointer;
  width: 100%;
  padding: 2%;
  background-image: url(../img/icons/dropdown-icon.png);
  background-repeat: no-repeat;
  background-position: calc(100% - 5px);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 13px;
  padding-right: 25px;
  padding-left: 30px;
  text-align: left;
`;

export const DropList = styled.ul`
  position: absolute;
  top: 75%;
  left: 0;
  z-index: 1000;
  display: block;
  float: left;
  width: 160px;
  padding: 5px 0;
  margin: 2px 0 0;
  font-size: 14px;
  text-align: left;
  list-style: none;
  background-color: #fff;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  border: 1px solid #ccc;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  max-height: 300px;
  overflow-y: scroll;
  li > a {
    display: block;
    padding: 3px 20px;
    clear: both;
    font-weight: 400;
    line-height: 1.42857143;
    color: #333;
    white-space: nowrap;
    cursor: pointer;
    transition: all 0.2s;
  }
  li > a:hover {
    background-color: #60c5ef;
    color: #fff;
  }
`;
