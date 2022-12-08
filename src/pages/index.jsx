import { useEffect, useState } from "react";
import Image from "next/image";
import Input from "../components/input";
import BackgroundImages from "../components/BackgroundImages";
import logo from "../assets/logo.png";
import arrow from "../assets/arrow.svg";
import styles from "../styles/home.module.scss";

const Home = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => {
      const num = prev + 1;
      if (num > 5) return 0;
      return num;
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, [5000]);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className={styles.container}>
      <BackgroundImages index={index} />
      <header className={styles.logoWrapper}>
        <Image src={logo} alt="pasta verse" width={"100%"} height={"100%"} />
      </header>

      <main className={styles.main}>
        <div className={styles.textWrapper}>
          <h1>
            The future of <span className={styles.pasta}>pasta</span> is here.
          </h1>

          <p className={styles.description}>
            When it comes to taste and texture, there's a big difference between
            fresh pasta and dried, boxed pasta products.
          </p>

          <Input />
        </div>
      </main>

      <div className={styles.dots}>
        {new Array(6).fill("").map((img, idx) => (
          <span
            key={idx}
            onClick={() => setIndex(idx)}
            style={{ backgroundColor: idx === index ? "#851e70" : "white" }}
          ></span>
        ))}
      </div>

      <div className={styles.arrow} onClick={handleNext}>
        <Image src={arrow} alt="next image" width={"100%"} height={"100%"} />
      </div>
    </div>
  );
};

export default Home;
