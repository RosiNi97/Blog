import { getBlogCollections } from "../../../firebase/firestore";
import { useEffect, useState } from "react";
import styles from "../../styles/blog.module.css";
import { DocumentData, QuerySnapshot } from "firebase/firestore";

export default function BlogCollection() {
  const [blogs, setBlogs] = useState<DocumentData[]>([]);

  useEffect(() => {
    getBlogCollections()
      .then((result) => {
        result.forEach((d) => {
          setBlogs([...blogs, d.data()]);
        });
      })
      .catch((error) => error);
  }, []);

  return (
    <div>
      {blogs
        ? blogs.map((b) => (
          <div key={b.title}>
            <h1>{b.title}</h1>
            <div>{b.video}</div>
            <div className={styles.blogmodule}>

            <section className={styles.img}>
              <img src="https://t3.ftcdn.net/jpg/02/51/30/52/360_F_251305284_M7NOdeDXcXx44WkUWkHQijztn3yneroq.jpg" alt="working"/>
            </section>
            <aside className={styles.details}>
              <details >
                <summary>More</summary>
                <p></p>
              </details>
              <details>
                <summary>Social media</summary>
              </details>
            </aside>
          </div>
          </div>
        ))
        : null}
    </div>
  );
}
