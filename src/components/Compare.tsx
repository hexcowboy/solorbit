import clsx from "clsx";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import { barlowDescription, barlowTitle } from "@/fonts";
import { useWindowSize } from "@/hooks/useWindowSize";
import styles from "@/styles/Compare.module.css";

import Dots from "./Dots";

export type CompareUnit = {
  label: string;
  amount: number;
  unit: string;
};

interface Props {
  title: string;
  // to is the unit that is being compared from (bigger number)
  to: CompareUnit;
  // from is the unit that is being compared to (smaller number)
  from: CompareUnit;
  color?: string;
}

const Compare = ({ title, to, from, color = "#39d353" }: Props) => {
  const windowSize = useWindowSize();
  const [width, setWidth] = useState("0px");
  const { ref: toRef, inView: toInView } = useInView();
  const { ref: fromRef, inView: fromInView } = useInView();

  useEffect(() => {
    setWidth(`${(from.amount / to.amount) * 100}%`);
  }, [from.amount, to.amount, windowSize]);

  return (
    <div className={styles.stack}>
      <h2 className={clsx(styles.heading, barlowTitle.className)}>{title}</h2>
      <Dots width={380} height={100} className={styles.dots} color="#666" />

      <div className={styles.row}>
        <h3 className={clsx(styles.title, barlowTitle.className)}>
          {to.label}
        </h3>
        <div
          className={clsx(styles.bar, styles.toBar)}
          ref={toRef}
          style={{
            width: toInView ? "100%" : 0,
            backgroundColor: color,
            boxShadow: `0 0 20px ${color}88, 0 0 0 1px #222`,
          }}
        />
        <p className={clsx(styles.unit, barlowDescription.className)}>
          {to.amount} {to.unit}
        </p>
      </div>

      <div className={styles.row}>
        <h3 className={clsx(styles.title, barlowTitle.className)}>
          {from.label}
        </h3>
        <div
          className={clsx(styles.bar, styles.fromBar)}
          style={{ width: fromInView ? width : 0 }}
          ref={fromRef}
        />
        <p className={clsx(styles.unit, barlowDescription.className)}>
          {from.amount} {from.unit}
        </p>
      </div>
    </div>
  );
};

export default Compare;
