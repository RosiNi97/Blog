import { getBlogCollections } from "../../../firebase/firestore";
import { useEffect, useState } from "react";
import styles from "../../styles/Blog.module.css";
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
            </div>
          ))
        : null}
    </div>
  );
}
