import React, { useEffect, useRef } from "react";
import { Button } from "./ui/button";

const NoButton = () => {
  const NoButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const { current: button } = NoButtonRef;
    const handleHover = () => {
      if (button) {
        const buttonRect = button.getBoundingClientRect();

        const maxX = window.innerWidth - buttonRect.width;
        const maxY = window.innerHeight - buttonRect.height;

        const newX = Math.random() * maxX;
        const newY = Math.random() * maxY;
        button.style.position = "absolute";
        button.style.left = `${Math.min(maxX, Math.max(0, newX))}px`;
        button.style.top = `${Math.min(maxY, Math.max(0, newY))}px`;
        button.style.transition = `left 0.3s ease, top 0.25s ease`;
      }
    };

    button?.addEventListener("mouseover", handleHover);
    return () => button?.removeEventListener("mouseover", handleHover);
  }, []);
  return (
    <Button variant={"destructive"} ref={NoButtonRef}>
      NO, I hate you !!!
    </Button>
  );
};

export default NoButton;
