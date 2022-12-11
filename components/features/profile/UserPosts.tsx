import Link from "next/link";
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
