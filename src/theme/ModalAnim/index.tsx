import React from "react";
import { useState, useEffect } from "react";
import Lottie from "react-lottie";
import animationData from "../../../static/lottie/modalanim.json";

const defaultOptions = { loop: true, autoplay: true, animationData: animationData, rendererSettings: { preserveAspectRatio: "xMidYMid slice" } };

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({ width: 400, height: 400 });

  useEffect(() => {
    setWindowDimensions(getWindowDimensions());

    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

export default function ModalAnim() {
  var { width } = useWindowDimensions();

  if (width > 500) {
    width = 400;
  }
  if (width < 500) {
    width = width - 50;
  }

  return (
    <div>
      <Lottie options={defaultOptions} height={width} width={width} />
    </div>
  );
}
