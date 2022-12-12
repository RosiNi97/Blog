import { doc, DocumentData, onSnapshot } from "firebase/firestore";
import Link from "next/link";
import { createContext, useEffect, useState } from "react";
import auth from "../../../firebase/auth";
import db from "../../../firebase/firestore";
import ArticleTemplate from "./articles/ArticleTemplate";

export const ArticleContext = createContext({ articleList: [{}] });

const UserPostList = () => {
  const [articleList, setArticleList] = useState([{}]);

  useEffect(() => {
    onSnapshot(doc(db, "articles", auth.currentUser?.uid as string), (doc) => {
      if (doc !== undefined) {
        const docData = doc.data();
        setArticleList(docData?.articles as Array<object>);
      }
      return {};
    });
  }, []);

  return (
    <div className="articles">
      <h1>Article List</h1>
      <Link href={"/navbar/createArticle"}>Create Article</Link>
      <div>
        <ArticleTemplate articleList={articleList} />
      </div>
    </div>
  );
};

export default UserPostList;
