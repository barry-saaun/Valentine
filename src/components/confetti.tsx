import * as React from "react";
import { useWindowSize } from "usehooks-ts";
import Confetti from "react-confetti";

const ConfettiComponent = () => {
  const { width, height } = useWindowSize();
  return <Confetti width={width} height={height} />;
};

export default ConfettiComponent;
