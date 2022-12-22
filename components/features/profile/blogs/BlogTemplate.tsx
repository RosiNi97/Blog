import { useContext } from "react";
import styles from "../../../../styles/Profile.module.css";
import UserContext from "../../context/UserContext";
const BlogTemplate = () => {
  const { userBlogsList } = useContext(UserContext);

  if (userBlogsList !== undefined && userBlogsList?.length > 0) {
    return (
      <div className={styles.blogs}>
        {userBlogsList.map((article) => (
          <div key={article.id + article.title}>
            <h3>{article.title}</h3>
            <div className={styles.contents}>
              <p>{article.contents}</p>
              <iframe
                src={`https://www.youtube.com/embed/${article.videoID}`}
                allow="accelerometer;autoplay; clipboard-write;encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={article.title}
              />
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    return <h1>No Articles To Show</h1>;
  }
};
export default BlogTemplate;
