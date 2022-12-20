import { BaseSyntheticEvent } from "react";
import auth from "../../../../firebase/auth";
import { AddArticle } from "../../../../firebase/firestore";
import { useContext } from "react";
import UserContext from "../../context/UserContext";
import router from "next/router";

const CreateArticle = () => {
  const { username } = useContext(UserContext);

  const handleArticleSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const userUID = auth.currentUser?.uid;
    const title = form.get("title")?.toString();
    const contents = form.get("contents")?.toString();
    const videoID = form.get("url")?.toString();

    if (title && contents && videoID && userUID) {
      AddArticle(title, contents, userUID, username, videoID);
    }
    e.target.reset();
    router.push("./profilePage");
  };

  return (
    <form name="create article" onSubmit={handleArticleSubmit}>
      <h1>Create Article</h1>
      <input type="text" name="title" maxLength={30} />
      <br></br>
      <input type="textarea" name="contents" />
      <input type="text" name="url" />
      <br></br>
      <input type="submit" value="Create" />
    </form>
  );
};
export default CreateArticle;
