import { BaseSyntheticEvent } from "react";
import auth from "../../../../firebase/auth";
import { AddArticle } from "../../../../firebase/firestore";
import { useContext } from "react";
import UserContext from "../../context/UserContext";
import router from "next/router";
import styles from "../../../../styles/CreateBlog.module.css";
import { updateDoc } from "firebase/firestore";

const CreateArticle = () => {
  const { username } = useContext(UserContext);

  const handleArticleSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const userUID = auth.currentUser?.uid;
    const title = form.get("title")?.toString();
    const contents = form.get("contents")?.toString();
    const videoURL = form.get("url")?.toString();

    if (title && contents && videoURL && userUID) {
      AddArticle(title, contents, userUID, username, videoURL);
    }
    e.target.reset();
    router.push("./profilePage");
  };

  return (
    <form
      className={styles.form}
      name="create article"
      onSubmit={handleArticleSubmit}
    >
      <h1>Create Article</h1>
      <label htmlFor="title" />
      <input
        type="text"
        name="title"
        maxLength={30}
        placeholder="Article Title"
      />
      <label htmlFor="contents" />
      <input type="textarea" name="contents" placeholder="Blog Contents" />
      <label htmlFor="url" />
      <input type="text" name="url" placeholder="Video URL" />
      <label htmlFor="submit" />
      <input type="submit" value="Create" className={styles.button} />
    </form>
  );
};
export default CreateArticle;
