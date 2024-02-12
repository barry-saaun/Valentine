import * as React from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import Confetti from "react-confetti";

const ConfettiComponent = () => {
  const { width, height } = useWindowSize();
  return <Confetti width={width} height={height} />;
};

export default ConfettiComponent;
