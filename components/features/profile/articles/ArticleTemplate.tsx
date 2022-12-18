import { useContext } from "react";
import UserContext from "../../context/UserContext";
const ArticleTemplate = () => {
  const { articleList } = useContext(UserContext);

  if (articleList !== undefined && articleList.length > 1) {
    return (
      <div>
        {articleList.map((article: any, key: number) => {
          return (
            <div key={key}>
              <h3>Title : {article.title}</h3>
              <p>{article.contents}</p>
            </div>
          );
        })}
      </div>
    );
  } else {
    return <div>No articles to show</div>;
  }
};
export default ArticleTemplate;
