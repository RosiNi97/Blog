import { collection, onSnapshot } from "firebase/firestore";
import { useContext, useEffect } from "react";
import db from "../../../firebase/firestore";
import { IArticle } from "../../../types/types";
import UserContext from "../context/UserContext";
import ProfileTemplate from "./ProfileTemplate";
import UserPostList from "./UserPosts";

const Profile = () => {
  const blogRef = collection(db, "blogs");
  const { getArticleList } = useContext(UserContext);
  // const docSnap = await getDocs(blogRef);
  // docSnap.forEach((blog) => {
  //   getArticleList(blog.data() as IArticle);
  // });
  useEffect(() => {
    return onSnapshot(blogRef, (snapshot) => {
      const blogList: Array<IArticle> = [];
      snapshot.docs.forEach((blog: any) => {
        blogList.push(blog.data());
      });
      getArticleList(blogList);
    });
  }, []);

  return (
    <div className="user-profile">
      <ProfileTemplate />
      <UserPostList />
    </div>
  );
};
export default Profile;
function getArticleList(blogList: IArticle[]) {
  throw new Error("Function not implemented.");
}
