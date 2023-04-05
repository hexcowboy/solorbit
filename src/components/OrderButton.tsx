import clsx from "clsx";
import Link from "next/link";

import { barlowDescription } from "@/fonts";
import styles from "@/styles/OrderButton.module.css";

const OrderButton = () => {
  return (
    <div className={styles.main}>
      <Link
        href="https://orbitsolar.myshopify.com/cart/44842670457112:1?channel=buy_button"
        className={clsx(styles.button, barlowDescription.className)}
        target="_blank"
        rel="noopener noreferrer"
      >
        Order Now
      </Link>
    </div>
  );
};

export default OrderButton;
