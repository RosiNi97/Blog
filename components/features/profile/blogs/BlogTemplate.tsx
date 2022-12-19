import { useContext } from "react";
import { IArticle } from "../../../../types/types";
import UserContext from "../../context/UserContext";
const BlogTemplate = () => {
  const { articleList } = useContext(UserContext);

  if (articleList !== undefined) {
    return (
      <div>
        {articleList.map((article: IArticle) => {
          console.log(article);
          return (
            <div key={article.id}>
              <h3>Title : {article.title}</h3>
              <p>{article.contents}</p>
              <iframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/${article.videoID}`}
                allow="accelerometer;autoplay; clipboard-write;encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={article.title}
              />
            </div>
          );
        })}
      </div>
    );
  } else {
    return <div>No articles to show</div>;
  }
};
export default BlogTemplate;
