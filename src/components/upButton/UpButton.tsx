"use client";

import React, { useEffect, useState } from "react";
import { IoIosArrowDropup } from "react-icons/io";
import { Container } from "./style";

const UpButton = () => {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const updateHeight = () => {
      const value = window.scrollY;
      value >= 45 ? setIsTop(false) : setIsTop(true);
    };

    window.addEventListener("scroll", updateHeight);
    updateHeight();

    return () => {
      window.removeEventListener("scroll", updateHeight);
    };
  }, []);

  const handleGetUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Container tabIndex={0} role="button" onClick={handleGetUp} $show={isTop}>
      <IoIosArrowDropup />
    </Container>
  );
};

export default UpButton;
