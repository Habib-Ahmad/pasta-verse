import Image from "next/image";
import logo from "../assets/logo.png";
import styles from "../styles/home.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
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

          <div className={styles.inputWrapper}>
            <input placeholder="Email address" />
            <button>Notify me</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
