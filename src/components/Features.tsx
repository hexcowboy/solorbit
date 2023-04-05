import clsx from "clsx";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

import { barlowDescription, barlowTitle } from "@/fonts";
import styles from "@/styles/Features.module.css";

import Dots from "./Dots";

type Tab = "battery" | "solar" | "router";

const Features = () => {
  const { ref, inView } = useInView();
  const [tab, setTab] = useState<Tab>("battery");

  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <h2 className={barlowTitle.className}>Solorbit Components</h2>
        <p className={barlowDescription.className}>
          The system is composed of a few different parts to make Starlink
          travel possible.
        </p>
      </div>

      <div className={styles.tabList}>
        <ul className={barlowDescription.className}>
          <li onClick={() => setTab("battery")}>Battery</li>
          <li onClick={() => setTab("router")}>Router</li>
          <li onClick={() => setTab("solar")}>Solar</li>
        </ul>
      </div>

      <div
        className={clsx(barlowDescription.className, styles.tabDetails)}
        ref={ref}
        style={{
          opacity: inView ? 1 : 0,
          transform: `translateX(${inView ? "0" : "-20px"})`,
        }}
      >
        <div style={{ display: tab === "battery" ? "flex" : "none" }}>
          <p>Battery</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet
            enim tortor at auctor urna nunc id cursus. Aliquet lectus proin nibh
            nisl condimentum id venenatis. Purus semper eget duis at tellus at
            urna condimentum mattis. Volutpat blandit aliquam etiam erat velit
            scelerisque in dictum. Vitae proin sagittis nisl rhoncus. Volutpat
            sed cras ornare arcu dui vivamus. Aliquam ultrices sagittis orci a
            scelerisque purus semper eget duis. Urna nec tincidunt praesent
            semper feugiat nibh. Mi sit amet mauris commodo quis imperdiet. Mi
            in nulla posuere sollicitudin aliquam. Vulputate odio ut enim
            blandit volutpat maecenas volutpat. Amet consectetur adipiscing elit
            pellentesque habitant morbi tristique.
          </p>
          <p>
            Tincidunt id aliquet risus feugiat in. Morbi non arcu risus quis
            varius. Non nisi est sit amet. Accumsan in nisl nisi scelerisque eu
            ultrices vitae. Tellus in hac habitasse platea. Eu augue ut lectus
            arcu bibendum at. Ut faucibus pulvinar elementum integer enim neque.
            Aliquet nec ullamcorper sit amet risus nullam eget felis eget.
            Ultrices in iaculis nunc sed augue lacus viverra vitae congue.
            Auctor neque vitae tempus quam pellentesque nec nam aliquam. Velit
            aliquet sagittis id consectetur purus ut. Facilisis volutpat est
            velit egestas. Felis donec et odio pellentesque diam volutpat
            commodo sed egestas. Tristique magna sit amet purus. Sodales neque
            sodales ut etiam sit amet nisl purus. In iaculis nunc sed augue.
            Magna fringilla urna porttitor rhoncus dolor. Diam phasellus
            vestibulum lorem sed. Sed vulputate odio ut enim blandit volutpat.
            Cursus turpis massa tincidunt dui ut. In nibh mauris cursus mattis
            molestie a iaculis at. Leo integer malesuada nunc vel risus commodo
            viverra maecenas accumsan.
          </p>
        </div>

        <div style={{ display: tab === "router" ? "flex" : "none" }}>
          <p>Router</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet
            enim tortor at auctor urna nunc id cursus. Aliquet lectus proin nibh
            nisl condimentum id venenatis. Purus semper eget duis at tellus at
            urna condimentum mattis. Volutpat blandit aliquam etiam erat velit
            scelerisque in dictum. Vitae proin sagittis nisl rhoncus. Volutpat
            sed cras ornare arcu dui vivamus. Aliquam ultrices sagittis orci a
            scelerisque purus semper eget duis. Urna nec tincidunt praesent
            semper feugiat nibh. Mi sit amet mauris commodo quis imperdiet. Mi
            in nulla posuere sollicitudin aliquam. Vulputate odio ut enim
            blandit volutpat maecenas volutpat. Amet consectetur adipiscing elit
            pellentesque habitant morbi tristique.
          </p>
          <p>
            Tincidunt id aliquet risus feugiat in. Morbi non arcu risus quis
            varius. Non nisi est sit amet. Accumsan in nisl nisi scelerisque eu
            ultrices vitae. Tellus in hac habitasse platea. Eu augue ut lectus
            arcu bibendum at. Ut faucibus pulvinar elementum integer enim neque.
            Aliquet nec ullamcorper sit amet risus nullam eget felis eget.
            Ultrices in iaculis nunc sed augue lacus viverra vitae congue.
            Auctor neque vitae tempus quam pellentesque nec nam aliquam. Velit
            aliquet sagittis id consectetur purus ut. Facilisis volutpat est
            velit egestas. Felis donec et odio pellentesque diam volutpat
            commodo sed egestas. Tristique magna sit amet purus. Sodales neque
            sodales ut etiam sit amet nisl purus. In iaculis nunc sed augue.
            Magna fringilla urna porttitor rhoncus dolor. Diam phasellus
            vestibulum lorem sed. Sed vulputate odio ut enim blandit volutpat.
            Cursus turpis massa tincidunt dui ut. In nibh mauris cursus mattis
            molestie a iaculis at. Leo integer malesuada nunc vel risus commodo
            viverra maecenas accumsan.
          </p>
        </div>

        <div style={{ display: tab === "solar" ? "flex" : "none" }}>
          <p>Solar</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet
            enim tortor at auctor urna nunc id cursus. Aliquet lectus proin nibh
            nisl condimentum id venenatis. Purus semper eget duis at tellus at
            urna condimentum mattis. Volutpat blandit aliquam etiam erat velit
            scelerisque in dictum. Vitae proin sagittis nisl rhoncus. Volutpat
            sed cras ornare arcu dui vivamus. Aliquam ultrices sagittis orci a
            scelerisque purus semper eget duis. Urna nec tincidunt praesent
            semper feugiat nibh. Mi sit amet mauris commodo quis imperdiet. Mi
            in nulla posuere sollicitudin aliquam. Vulputate odio ut enim
            blandit volutpat maecenas volutpat. Amet consectetur adipiscing elit
            pellentesque habitant morbi tristique.
          </p>
          <p>
            Tincidunt id aliquet risus feugiat in. Morbi non arcu risus quis
            varius. Non nisi est sit amet. Accumsan in nisl nisi scelerisque eu
            ultrices vitae. Tellus in hac habitasse platea. Eu augue ut lectus
            arcu bibendum at. Ut faucibus pulvinar elementum integer enim neque.
            Aliquet nec ullamcorper sit amet risus nullam eget felis eget.
            Ultrices in iaculis nunc sed augue lacus viverra vitae congue.
            Auctor neque vitae tempus quam pellentesque nec nam aliquam. Velit
            aliquet sagittis id consectetur purus ut. Facilisis volutpat est
            velit egestas. Felis donec et odio pellentesque diam volutpat
            commodo sed egestas. Tristique magna sit amet purus. Sodales neque
            sodales ut etiam sit amet nisl purus. In iaculis nunc sed augue.
            Magna fringilla urna porttitor rhoncus dolor. Diam phasellus
            vestibulum lorem sed. Sed vulputate odio ut enim blandit volutpat.
            Cursus turpis massa tincidunt dui ut. In nibh mauris cursus mattis
            molestie a iaculis at. Leo integer malesuada nunc vel risus commodo
            viverra maecenas accumsan.
          </p>
        </div>
      </div>

      <Dots width={240} height={100} color="#666" className={styles.dots} />
    </div>
  );
};

export default Features;
