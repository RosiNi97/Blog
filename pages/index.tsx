import styles from "../styles/Home.module.css";
import Head from "next/head";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog</title>
        <meta name="blog" content="blog" />
      </Head>
      <h1>HOME PAGE</h1>
    </div>
  );
}
