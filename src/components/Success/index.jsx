import Image from "next/image";
import checkmark from "../../assets/checkmark.png";
import close from "../../assets/close.png";
import logo from "../../assets/logo.png";
import styles from "./styles.module.scss";

const Success = ({ handleClose }) => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.close}
        onClick={handleClose}
        src={close}
        alt="close"
        width={15}
        height={15}
      />
      <Image
        className={styles.checkmark}
        src={checkmark}
        alt="success"
        width={100}
        height={100}
      />
      <Image className={styles.logo} src={logo} alt="pasta verse" width={180} />
      <p className={styles.text}>
        Thank you for subcribing to pastaverse early access, we will keep you
        updated
      </p>
    </div>
  );
};

export default Success;
