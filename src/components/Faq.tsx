import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { IconX } from "@tabler/icons-react";
import { useRef } from "react";

import { barlowDescription, barlowTitle } from "@/fonts";
import styles from "@/styles/Faq.module.css";

import Dots from "./Dots";

const Faq = () => {
  const ref = useRef<HTMLHeadingElement>(null);

  return (
    <div className={styles.main}>
      <h2 className={barlowTitle.className} ref={ref}>
        FAQ
      </h2>

      <Accordion
        className={barlowDescription.className}
        transition
        transitionTimeout={200}
        allowMultiple
      >
        <AccordionItem
          header={({ state }) => (
            <div className={styles.header}>
              <span>What is Orbit Solar?</span>
              <IconX
                style={{
                  transform: `rotate(${state.isEnter ? "0" : "45"}deg)`,
                }}
                className={styles.closeIcon}
                size={18}
              />
            </div>
          )}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </AccordionItem>

        <AccordionItem
          header={({ state }) => (
            <div className={styles.header}>
              <span>Where does it come from?</span>
              <IconX
                style={{
                  transform: `rotate(${state.isEnter ? "0" : "45"}deg)`,
                }}
                className={styles.closeIcon}
                size={18}
              />
            </div>
          )}
        >
          Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla vel
          erat quis sodales. Nam ex enim, eleifend venenatis lectus vitae,
          accumsan auctor mi.
        </AccordionItem>

        <AccordionItem
          header={({ state }) => (
            <div className={styles.header}>
              <span>Why do we use it?</span>
              <IconX
                style={{
                  transform: `rotate(${state.isEnter ? "0" : "45"}deg)`,
                }}
                className={styles.closeIcon}
                size={18}
              />
            </div>
          )}
        >
          Suspendisse massa risus, pretium id interdum in, dictum sit amet ante.
          Fusce vulputate purus sed tempus feugiat.
        </AccordionItem>
      </Accordion>

      <Dots width={(ref.current?.clientWidth || 600) + 2} height={120} color="#666" />
    </div>
  );
};

export default Faq;
