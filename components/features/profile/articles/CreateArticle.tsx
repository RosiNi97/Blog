import { BaseSyntheticEvent } from "react";
import auth from "../../../../firebase/auth";
import { AddArticle } from "../../../../firebase/firestore";
import { routerProfile } from "../../routes/Routes";
import { useContext } from "react";
import { UserContext } from "../../layout/Layuot";

const CreateArticle = () => {
  const { username } = useContext(UserContext);
  const handleArticleSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const title = form.get("title") as string;
    const contents = form.get("contents") as string;

    AddArticle(title, contents, auth.currentUser?.uid as string, username);
    e.target.reset();
    routerProfile();
  };
  return (
    <form name="create article" onSubmit={handleArticleSubmit}>
      <h1>Create Article</h1>
      <input type="text" name="title" maxLength={30} />
      <br></br>
      <input type="textarea" name="contents" />
      <br></br>
      <input type="submit" value="Create" />
    </form>
  );
};
export default CreateArticle;
