import { CSSProperties } from "react";

interface Props {
  width: number;
  height: number;
}

const Dots = ({
  width,
  height,
  color,
  ...props
}: Props & JSX.IntrinsicElements["div"]) => {
  return (
    <div
      style={{
        width,
        height,
        backgroundImage: `radial-gradient(circle at 1px 1px, ${color} 1px, transparent 0)`,
        backgroundSize: "30px 30px",
        zIndex: -1,
      }}
      {...props}
    />
  );
};

export default Dots;
