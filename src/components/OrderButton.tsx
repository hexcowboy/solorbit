import clsx from "clsx";

import { barlowDescription } from "@/fonts";
import styles from "@/styles/OrderButton.module.css";

const OrderButton = () => {
  return (
    <div className={styles.main}>
      <button className={clsx(styles.button, barlowDescription.className)}>
        Order Now
      </button>
    </div>
  );
};

export default OrderButton;
