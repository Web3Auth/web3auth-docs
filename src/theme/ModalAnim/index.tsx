import React from "react";
import Lottie from "react-lottie";
import animationData from "../../../static/lottie/modalanim.json";

const defaultOptions = { loop: true, autoplay: true, animationData: animationData, rendererSettings: { preserveAspectRatio: "xMidYMid slice" } };

export default function ModalAnim() {
  return (
    <div>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
}
