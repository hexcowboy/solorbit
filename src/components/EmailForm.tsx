import { IconCircleCheck, IconLoader } from "@tabler/icons-react";
import clsx from "clsx";
import { useState } from "react";

import { barlowDescription } from "@/fonts";
import styles from "@/styles/EmailForm.module.css";

const EmailForm = () => {
  const [loading, setLoading] = useState(false);
  console.log(loading);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const email = (e.target as HTMLFormElement).elements[0] as HTMLInputElement;

    try {
      await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email.value }),
      })
        .then((res) => {
          if (res.status === 200) {
            alert("Thanks for subscribing!");
          } else {
            alert("Something went wrong, please try again later.");
          }
        })
        .catch((err) => {
          console.error(err);
        });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className={styles.main} onSubmit={handleSubmit}>
      <input
        type="email"
        required
        placeholder="Email for early access"
        className={clsx(styles.input, barlowDescription.className)}
      />
      <button className={styles.button}>
        {loading ? (
          <IconLoader className={styles.loader} />
        ) : (
          <IconCircleCheck />
        )}
      </button>
    </form>
  );
};

export default EmailForm;
