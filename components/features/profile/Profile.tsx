import ProfileTemplate from "./ProfileTemplate";
import UserPostList from "./UserPosts";

const Profile = () => {
  return (
    <div className="user-profile">
      <ProfileTemplate />
      <UserPostList />
    </div>
  );
};
export default Profile;
