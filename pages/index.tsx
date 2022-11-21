import styles from "../styles/Home.module.css";
import Head from "next/head";
import Navbar from "../components/features/navbar/Navbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog</title>
        <meta name="blog" content="blog" />
      </Head>
      <Navbar />
    </div>
  );
}
