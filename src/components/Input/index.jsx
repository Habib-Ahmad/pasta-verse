import { useState } from "react";
import { CircularProgress, Modal } from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
import uuid from "react-uuid";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import Success from "../Success";
import styles from "./styles.module.scss";

const Input = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async ({ email }) => {
    const id = uuid();
    await setDoc(doc(db, `emails/${id}`), { email }).then(() => handleOpen());
  };

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .trim()
            .required("This field is required")
            .email("E-mail is not valid"),
        })}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, handleChange, values, isSubmitting }) => (
          <form onSubmit={handleSubmit} className={styles.inputWrapper}>
            <input
              placeholder="Email address"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            <button type="submit">
              {isSubmitting ? <CircularProgress size={20} /> : "Notify me"}
            </button>
          </form>
        )}
      </Formik>

      <Modal open={open} onClose={handleClose}>
        <div className={styles.modalContent}>
          <Success handleClose={handleClose} />
        </div>
      </Modal>
    </div>
  );
};

export default Input;
