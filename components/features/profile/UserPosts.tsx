import { doc, DocumentData, onSnapshot } from "firebase/firestore";
import Link from "next/link";
import { createContext, useEffect, useState } from "react";
import auth from "../../../firebase/auth";
import db, { currentUserArticles } from "../../../firebase/firestore";
import ArticleTemplate from "./articles/ArticleTemplate";

export const ArticleContext = createContext({ articleList: {} });

const UserPostList = () => {
  const [articleList, setArticleList] = useState<DocumentData>();
  onSnapshot(doc(db, "articles", auth.currentUser?.uid as string), (doc) => {
    if (doc !== undefined) {
      setArticleList(doc.data());
    }
    return {};
  });
  return (
    <ArticleContext.Provider value={articleList}>
      <div className="articles">
        <h1>Article List</h1>
        <Link href={"/navbar/createArticle"}>Create Article</Link>
        <ArticleTemplate articleList={articleList} />
      </div>
    </ArticleContext.Provider>
  );
};

export default UserPostList;
