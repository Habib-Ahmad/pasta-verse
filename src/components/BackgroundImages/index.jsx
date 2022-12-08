import { useMediaQuery } from "@mui/material";
import Image from "next/image";

import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.png";

import img7 from "../../assets/img1-mobile.png";
import img8 from "../../assets/img2-mobile.png";
import img9 from "../../assets/img3-mobile.png";
import img10 from "../../assets/img4-mobile.png";
import img11 from "../../assets/img5-mobile.png";
import img12 from "../../assets/img6-mobile.png";
import styles from "./styles.module.scss";

const BackgroundImages = ({ index }) => {
  const isDesktop = useMediaQuery("(min-width:769px)");

  return (
    <div
      className={styles.container}
      style={{ marginTop: `calc(-100vh * ${index})` }}
    >
      {isDesktop ? (
        <>
          <Image src={img1} alt="" />
          <Image src={img2} alt="" />
          <Image src={img3} alt="" />
          <Image src={img4} alt="" />
          <Image src={img5} alt="" />
          <Image src={img6} alt="" />
        </>
      ) : (
        <>
          <Image src={img7} alt="" />
          <Image src={img8} alt="" />
          <Image src={img9} alt="" />
          <Image src={img10} alt="" />
          <Image src={img11} alt="" />
          <Image src={img12} alt="" />
        </>
      )}
    </div>
  );
};

export default BackgroundImages;
