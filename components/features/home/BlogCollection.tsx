import db, { getBlogCollections } from "../../../firebase/firestore";
import { useContext, useEffect, useState } from "react";
import styles from "../../../styles/Blog.module.css";
import {
  collection,
  DocumentData,
  onSnapshot,
  QuerySnapshot,
} from "firebase/firestore";
import UserContext from "../context/UserContext";
import { IArticle } from "../../../types/types";

export default function BlogCollection() {
  const { articleList, getArticleList } = useContext(UserContext);

  const blogRef = collection(db, "blogs");

  useEffect(() => {
    return onSnapshot(blogRef, (snapshot) => {
      const blogList: Array<IArticle> = [];
      snapshot.docs.forEach((blog: any) => {
        blogList.push(blog.data());
      });
      getArticleList(blogList);
    });
  }, []);

  return (
    <div>
      {articleList
        ? articleList.map((b) => (
            <div key={b.id}>
              <h3>Title : {b.title}</h3>
              <p>{b.contents}</p>
              <iframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/${b.videoID}`}
                allow="accelerometer;autoplay; clipboard-write;encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={b.title}
              />
            </div>
          ))
        : "No Content To Show"}
    </div>
  );
}
