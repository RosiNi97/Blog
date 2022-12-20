import { collection, onSnapshot, query, where } from "firebase/firestore";
import Link from "next/link";
import { useContext, useEffect } from "react";
import auth from "../../../firebase/auth";
import db from "../../../firebase/firestore";
import { IArticle } from "../../../types/types";
import UserContext from "../context/UserContext";
import BlogTemplate from "./blogs/BlogTemplate";
import ProfileTemplate from "./ProfileTemplate";

const Profile = () => {
  // init user's posts arr here
  // const { setUserBlogList } = useContext(UserContext);

  // useEffect(() => {
  //   const currentUser = auth.currentUser?.uid;
  //   if (currentUser) {
  //     const queryRef = query(
  //       collection(db, "blogs"),
  //       where("Uid", "==", currentUser)
  //     );
  //     onSnapshot(queryRef, (snapshot) => {
  //       const blogList: Array<IArticle> = [];
  //       snapshot.forEach((blog: any) => {
  //         blogList.push(blog.data());
  //       });
  //       setUserBlogList(blogList);
  //     });
  //   } else {
  //     console.log("miss");
  //   }
  // }, []);

  return (
    <div className="user-profile">
      <ProfileTemplate />
      <div className="articles">
        <h1>Article List</h1>
        <Link href={"/navbar/createArticle"}>Create Article</Link>
        <div>
          <BlogTemplate />
        </div>
      </div>
    </div>
  );
};
export default Profile;
