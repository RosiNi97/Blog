import { doc, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import auth, { currentUserUid } from "../../../firebase/auth";
import { usersDB } from "../../../firebase/firestore";
import ProfileTemplate from "./ProfileTemplate";

const Profile = () => {
  const [user, setUsername] = useState<any>([{}]);
  const userUID = auth.currentUser?.uid as string;
  const userObj = async () => {
    try {
      console.log(query(usersDB, where("userUID", "==", userUID)));
    } catch (err) {
      console.log(err);
    }
  };
  const userDoc = async () => {
    try {
      await getDocs(usersDB).then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          console.log(doc.data);
          // setUsername(doc.data());
        });
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log(auth.currentUser?.uid);
    userDoc();
    userObj();
    // console.log(user);
  });

  return (
    <div>
      <ProfileTemplate username={"user"} />
    </div>
  );
};
export default Profile;
