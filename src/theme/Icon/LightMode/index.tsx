import type { Props } from "@theme/Icon/LightMode";

export default function IconLightMode(props: Props): JSX.Element {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} {...props} style={{ color: "rgb(124,140,161)" }}>
      <path
        fill="currentColor"
        d="M 9.37 5.51 z M 12 3 c -4.97 0 -9 4.03 -9 9 s 4.03 9 9 9 s 9 -4.03 9 -9 c 0 -0.46 -0.04 -0.92 -0.1 -1.36 c -0.98 1.37 -2.58 2.26 -4.4 2.26 c -2.98 0 -5.4 -2.42 -5.4 -5.4 c 0 -1.81 0.89 -3.42 2.26 -4.4 C 12.92 3.04 12.46 3 12 3 L 12 3 z"
      />
    </svg>
  );
}
