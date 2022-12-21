import db from "../../../firebase/firestore";
import { useContext, useEffect, useState } from "react";
import styles from "../../../styles/Blog.module.css";
import UserContext from "../context/UserContext";
import { collection, onSnapshot } from "firebase/firestore";
import { IArticle } from "../../../types/types";

export default function BlogCollection() {
  //const { articleList } = useContext(UserContext);
  const { articleList, setArticleList } = useContext(UserContext);

  const blogRef = collection(db, "blogs");

  useEffect(() => {
    return onSnapshot(blogRef, (snapshot) => {
      const blogList: Array<IArticle> = [];
      snapshot.docs.forEach((blog: any) => {
        blogList.push(blog.data());
      });
      setArticleList(blogList);
    });
  }, []);
  return (
    <div>
      {blogs
        ? blogs.map((b) => (
            <div key={b.title}>
              <h1>{b.title}</h1>
              <div>{b.video}</div>
              <div key={b.id}>
                <h3>Title : {b.title}</h3>
                <p>{b.contents}</p>
                <section>
                  <img
                    src="https://t3.ftcdn.net/jpg/02/51/30/52/360_F_251305284_M7NOdeDXcXx44WkUWkHQijztn3yneroq.jpg"
                    alt="working"
                  />
                </section>
                <aside>
                  <details>
                    <summary>More</summary>
                    <p></p>
                  </details>
                  <details>
                    <summary>Social media</summary>
                    <img src="https://cdn-icons-png.flaticon.com/512/1384/1384015.png" alt="inst logo" width="60px;" height="60"/>
                    <img src="https://cdn-icons-png.flaticon.com/512/2175/2175193.png" alt="fb logo" width="60px;" height="60"/>
                    <img src="https://cdn-icons-png.flaticon.com/512/466/466953.png" alt="pint logo" width="60px;" height="60"/>
                  </details>
                </aside>
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
