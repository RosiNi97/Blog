import { collection, onSnapshot, query, where } from "firebase/firestore";
import Link from "next/link";
import router from "next/router";
import { useContext, useEffect } from "react";
import auth from "../../../firebase/auth";
import db from "../../../firebase/firestore";
import styles from "../../../styles/Home.module.css";
import { IArticle } from "../../../types/types";
import UserContext from "../context/UserContext";

const LogedInNavbar = () => {
  const handleClick = () => {
    auth.signOut();
    router.push("/navbar/loginPage");
  };
  const { setUserBlogList } = useContext(UserContext);

  useEffect(() => {
    const currentUser = auth.currentUser?.uid;
    if (currentUser) {
      const queryRef = query(
        collection(db, "blogs"),
        where("Uid", "==", currentUser)
      );
      onSnapshot(queryRef, (snapshot) => {
        const blogList: Array<IArticle> = [];
        snapshot.forEach((blog: any) => {
          blogList.push(blog.data());
        });
        setUserBlogList(blogList);
      });
    }
  }, []);

  return (
    <div className={styles.navbar}>
      <Link href="/">Home</Link>
      <Link href="/navbar/profilePage">Profile</Link>
      <button onClick={handleClick}>Log Out</button>
    </div>
  );
};
export default LogedInNavbar;
