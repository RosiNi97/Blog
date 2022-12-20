import { doc, DocumentData, onSnapshot } from "firebase/firestore";
import Link from "next/link";
import { useContext } from "react";

import UserContext from "../context/UserContext";
import BlogTemplate from "./blogs/BlogTemplate";

// export const ArticleContext = createContext({ articleList: [{}] });

const UserPostList = () => {
  const { articleList } = useContext(UserContext);

  return (
    <div className="articles">
      <h1>Article List</h1>
      <Link href={"/navbar/createArticle"}>Create Article</Link>
      <div>
        <BlogTemplate />
      </div>
    </div>
  );
};

export default UserPostList;
