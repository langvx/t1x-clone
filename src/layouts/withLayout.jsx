import React from "react";
import Header from "components/Header";

export default (Component) => {
  return (props) => {
    return (
      <>
        <Header />
        <Component {...props} />
        <div></div>
      </>
    );
  };
};
