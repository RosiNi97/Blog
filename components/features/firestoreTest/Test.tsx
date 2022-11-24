import { useState, FormEvent, useEffect } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/firebaseConfig";

const Test = () => {
  const [username, setUsername] = useState("");
  const [userList, setUserLIst] = useState([]);
  const usersCollection = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollection);
      //   setUserLIst([...,data.])
      console.log(data);
    };
  });
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault;
    try {
      await addDoc(usersCollection, {
        username: username,
      });
    } catch (err) {
      alert(err);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={(e) => setUsername(e.target.value)} />
      <input type="submit" value="Submit" />
    </form>
  );
};
export default Test;
