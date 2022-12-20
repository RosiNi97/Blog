import Link from "next/link";
import BlogTemplate from "./blogs/BlogTemplate";
import ProfileTemplate from "./ProfileTemplate";
import styles from "../../../styles/Profile.module.css";
const Profile = () => {
  return (
    <div className={styles.profile}>
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
