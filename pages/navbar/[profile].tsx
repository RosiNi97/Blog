import { useRouter } from "next/router";
import Profile from "../../components/features/profile/Profile";

export async function getStaticPaths() {}

const ProfilePage = () => {
  const router = useRouter();

  return (
    <div>
      HI
      <Profile userUID={router.query.profile as string} />
    </div>
  );
};
export default ProfilePage;
