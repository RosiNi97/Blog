import { DocumentData } from "firebase/firestore";
import Link from "next/link";
import { useEffect, useState } from "react";
import auth from "../../../firebase/auth";
import { currentUserArticles } from "../../../firebase/firestore";
import ArticleTemplate from "./articles/ArticleTemplate";

const UserPostList = () => {
  return (
    <div className="articles">
      <h1>Article List</h1>
      <Link href={"/navbar/createArticle"}>Create Article</Link>
      <ArticleTemplate />
    </div>
  );
};

export default UserPostList;
