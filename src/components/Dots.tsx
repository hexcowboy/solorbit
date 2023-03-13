import { CSSProperties } from "react";

interface Props {
  width: number;
  height: number;
}

const css: CSSProperties = {
  backgroundImage:
    "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
  backgroundSize: "30px 30px",
};

const Dots = ({
  width,
  height,
  ...props
}: Props & JSX.IntrinsicElements["div"]) => {
  return <div style={{ ...css, width, height }} {...props} />;
};

export default Dots;
