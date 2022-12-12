import { useContext } from "react";
import { UserContext } from "../../layout/Layuot";
import { ArticleContext } from "../UserPosts";

const ArticleTemplate = (props) => {
  // const { articleList } = useContext(ArticleContext);
  return props.articleList.articles.map((article: any) => {
    <div>
      <h3>{article.title}</h3>
      <p>{article.contents}</p>
    </div>;
  });
};
export default ArticleTemplate;
