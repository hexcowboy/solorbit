import { IconCircleCheck, IconLoader } from "@tabler/icons-react";
import clsx from "clsx";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { barlowDescription } from "@/fonts";
import styles from "@/styles/EmailForm.module.css";

const EmailForm = () => {
  const [signedUp, setSignedUp] = useState(false);
  const [loading, setLoading] = useState(false);

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
            setSignedUp(true);
            toast.success("We'll be in touch soon!");
          } else {
            toast.error("Something went wrong, please try again later.");
          }
        })
        .catch((err) => {
          toast.error("Something went wrong, please try again later.");
          console.error(err);
        });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {!signedUp && (
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
      )}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default EmailForm;
