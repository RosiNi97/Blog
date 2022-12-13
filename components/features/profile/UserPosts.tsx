import { doc, DocumentData, onSnapshot } from "firebase/firestore";
import Link from "next/link";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import auth from "../../../firebase/auth";
import db from "../../../firebase/firestore";
import { UserContext } from "../layout/Layuot";
import ArticleTemplate from "./articles/ArticleTemplate";

// export const ArticleContext = createContext({ articleList: [{}] });

const UserPostList = () => {
  const { articleList } = useContext(UserContext);

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
