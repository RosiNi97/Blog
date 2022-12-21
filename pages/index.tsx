import styles from "../styles/Profile.module.css";
import Head from "next/head";
import BlogCollection from "../components/features/home/BlogCollection";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog</title>
        <meta name="blog" content="blog" />
      </Head>
      <BlogCollection />
    </div>
  );
}
