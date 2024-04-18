'use client'

import { RefObject, useRef } from "react";

const TheFooter = () => {
  const myRef: RefObject<HTMLDivElement> = useRef(null);

  const scrollToRef = () => {
    if (myRef.current) {
      window.scrollTo({
        top: myRef.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return <footer className="container" ref={myRef}>Created by &copy;MishaNep</footer>;
};

export { TheFooter };
