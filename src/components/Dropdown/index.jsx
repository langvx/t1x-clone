import React, { useEffect, useState, useRef } from "react";

import ExpandIco from "assets/dropdown-icon.png";

import { DropList, Title, Root } from "./DropdownStyle";

const DropdownMenu = (props) => {
  const [isLocating, setLocating] = useState(false);
  const node = useRef();

  const handleRenderList = () => {
    return props.data.map((locale, index) => (
      <li key={index}>
        <a href={index}>{locale}</a>
      </li>
    ));
  };

  const handleClickOutside = () => {
    setLocating((prevState) => !prevState);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutside, false);
    return () => {
      document.removeEventListener("mousedown", handleOutside, false);
    };
  }, [isLocating]);

  const handleOutside = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }
    setLocating(false);
  };

  return (
    <Root ref={node}>
      <Title
        style={{ backgroundImage: "url(" + ExpandIco + ")" }}
        onClick={handleClickOutside}
      >
        {props.data[0]}
      </Title>
      {isLocating && (
        <DropList className="scrollStyled">{handleRenderList()}</DropList>
      )}
    </Root>
  );
};

export default DropdownMenu;
