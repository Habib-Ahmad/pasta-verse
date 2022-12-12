import Image from "next/image";
import { Button, CircularProgress, TextField } from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import uuid from "react-uuid";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import close from "../../assets/close.png";
import logo from "../../assets/logo.png";
import styles from "./styles.module.scss";

const SubscribeForm = ({ handleClose, setSuccess }) => {
  const handleSubmit = async (values) => {
    const id = uuid();
    await setDoc(doc(db, `subscribers/${id}`), { ...values }).then(() => {
      setSuccess(true);
      emailjs.send(
        "service_xpeawzp",
        "template_k27rfpq",
        values,
        "N6gXtnhG2EYstoEdK"
      );
    });
  };

  return (
    <div className={styles.container}>
      <Image
        className={styles.close}
        onClick={handleClose}
        src={close}
        alt="close"
      />
      <Image src={logo} alt="pasta verse" width={180} />

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
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
            <TextField
              placeholder="First Name"
              name="firstName"
              size="small"
              value={values.firstName}
              onChange={handleChange}
            />
            <TextField
              placeholder="Last Name"
              name="lastName"
              size="small"
              value={values.lastName}
              onChange={handleChange}
            />
            <TextField
              placeholder="Email Address"
              name="email"
              size="small"
              value={values.email}
              onChange={handleChange}
            />
            <Button variant="contained" size="large" type="submit" fullWidth>
              {isSubmitting ? <CircularProgress size={25} /> : "Notify me"}
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default SubscribeForm;
