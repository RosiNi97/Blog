import { collection, onSnapshot } from "firebase/firestore";
import Link from "next/link";
import { useContext, useEffect } from "react";
import db from "../../../firebase/firestore";
import { IArticle } from "../../../types/types";
import UserContext from "../context/UserContext";
import BlogTemplate from "./blogs/BlogTemplate";
import ProfileTemplate from "./ProfileTemplate";

const Profile = () => {
  const { setArticleList } = useContext(UserContext);
  const blogRef = collection(db, "blogs");
  useEffect(() => {
    return onSnapshot(blogRef, (snapshot) => {
      const blogList: Array<IArticle> = [];
      snapshot.docs.forEach((blog: any) => {
        blogList.push(blog.data());
      });
      setArticleList(blogList);
    });
  }, []);

  return (
    <div className="user-profile">
      <ProfileTemplate />
      <h1>Article List</h1>
      <Link href={"/navbar/createArticle"}>Create Article</Link>
      <div>
        <BlogTemplate />
      </div>
    </div>
  );
};
export default Profile;
