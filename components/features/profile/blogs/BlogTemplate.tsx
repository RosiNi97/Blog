import { useContext } from "react";
import { IArticle } from "../../../../types/types";
import UserContext from "../../context/UserContext";
const BlogTemplate = () => {
  const { userBlogsList } = useContext(UserContext);

  if (userBlogsList !== undefined && userBlogsList?.length > 0) {
    return (
      <div>
        {userBlogsList.map((article) => (
          <div key={article.id + article.title}>
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
        ))}
      </div>
    );
  } else {
    return <h1>No Articles To Show</h1>;
  }
};
export default BlogTemplate;
