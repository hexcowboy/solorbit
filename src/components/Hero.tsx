import { IconArrowDown } from "@tabler/icons-react";
import { clsx } from "clsx";

// import Image from "next/image";
import { barlowDescription, barlowTitle } from "@/fonts";
import styles from "@/styles/Hero.module.css";

// import Dots from "./Dots";

interface Props {
  scrollDownRef: React.RefObject<HTMLDivElement>;
}

const Hero = ({ scrollDownRef }: Props) => {
  return (
    <div className={styles.main}>
      <h1 className={clsx(barlowTitle.className, styles.header)}>
        Orbit Solar
      </h1>

      <div className={styles.image}>
      {/*   <Image */}
      {/*     src="/starlink-hero.webp" */}
      {/*     alt="Starlink silhouette" */}
      {/*     width={700} */}
      {/*     height={400} */}
      {/*     className={styles.photo} */}
      {/*   /> */}
      {/*   <Dots width={700} height={400} className={styles.dots} /> */}
      </div>

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
