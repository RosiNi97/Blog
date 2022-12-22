import db from "../../../firebase/firestore";
import { useContext, useEffect } from "react";
import styles from "../../../styles/Blog.module.css";
import UserContext from "../context/UserContext";
import { collection, onSnapshot } from "firebase/firestore";
import { dataConverter, IArticle } from "../../../types/types";

export default function BlogCollection() {
  const { articleList, setArticleList } = useContext(UserContext);
  const blogRef = collection(db, "blogs").withConverter(dataConverter);

  useEffect(() => {
    return onSnapshot(blogRef, (snapshot) => {
      const blogList: Array<IArticle> = [];
      snapshot.docs.forEach((blog) => {
        blogList.push(blog.data());
      });
      setArticleList(blogList);
    });
  }, []);

  return (
    <div>
      {articleList
        ? articleList.map((b) => (
            <div key={b.docID} className={styles.article}>
              <h1>{b.title}</h1>
              <div className={styles.contents}>
                <p>{b.contents}</p>
                <div className={styles.blog}></div>
                <iframe
                  width="853"
                  height="480"
                  src={`https://www.youtube.com/embed/${b.videoID}`}
                  allow="accelerometer;autoplay; clipboard-write;encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={b.title}
                />
              </div>
            </div>
          ))
        : "No Content To Show"}
    </div>
  );
}
