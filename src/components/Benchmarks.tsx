import { RefObject, forwardRef } from "react";

import styles from "@/styles/Benchmarks.module.css";

import Compare, { type CompareUnit } from "./Compare";

const benchmarks = {
  battery: {
    from: {
      label: "Starlink Router",
      amount: 10,
      unit: "hours",
    },
    to: {
      label: "Orbit Solar Router",
      amount: 20,
      unit: "hours",
    },
  },
  power: {
    from: {
      label: "Jackery",
      amount: 14,
      unit: "Wh",
    },
    to: {
      label: "Orbit Solar",
      amount: 20,
      unit: "Wh",
    },
  },
} satisfies {
  [key: string]: { from: CompareUnit; to: CompareUnit };
};

const Benchmarks = forwardRef((props, ref) => {
  return (
    <div
      id="benchmarks"
      className={styles.main}
      ref={ref as RefObject<HTMLDivElement>}
      {...props}
    >
      <Compare
        title="Battery Life"
        from={benchmarks.battery.from}
        to={benchmarks.battery.to}
      />

      <Compare
        title="Power Usage"
        from={benchmarks.power.from}
        to={benchmarks.power.to}
        color="#8957e5"
      />
    </div>
  );
});

Benchmarks.displayName = "Benchmarks";

export default Benchmarks;