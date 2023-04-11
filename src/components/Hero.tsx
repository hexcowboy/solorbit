import { IconArrowDown } from "@tabler/icons-react";
import { clsx } from "clsx";
import Image from "next/image";

import logo from "@/assets/logo.svg";
import { barlowDescription } from "@/fonts";
import styles from "@/styles/Hero.module.css";

interface Props {
  scrollDownRef: React.RefObject<HTMLDivElement>;
}

const Hero = ({ scrollDownRef }: Props) => {
  return (
    <div className={styles.main}>
      <Image
        src={logo}
        alt="Solorbit logo"
        width={300}
        className={styles.header}
      />

      <div className={styles.bottomPanel}>
        <p className={clsx(barlowDescription.className, styles.description)}>
          The best solution for portable Starlink power.
        </p>
        <button
          onClick={() => {
            scrollDownRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
          className={styles.downArrow}
        >
          <IconArrowDown />
        </button>
      </div>
    </div>
  );
};

export default Hero;
