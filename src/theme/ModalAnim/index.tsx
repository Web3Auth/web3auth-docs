import useBaseUrl from "@docusaurus/useBaseUrl";
import { Player } from "@lottiefiles/react-lottie-player";
import { useEffect, useState } from "react";

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
  const { width } = useWindowDimensions();
  let style = {};

  if (width > 500) {
    style = {
      width: 400,
    };
  }
  if (width < 500) {
    style = {
      width: width - 50,
    };
  }

  return (
    <div>
      <Player loop autoplay controls={false} src={useBaseUrl("/lottie/modalanim.json")} style={style} />
    </div>
  );
}
