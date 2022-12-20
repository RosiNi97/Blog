import * as React from "react";
import { useState } from "react";
import { IArticle, UserContextType } from "../../../types/types";

const UserContext = React.createContext<UserContextType>({
  username: "",
  userState: false,
  articleList: undefined,
  setUserState: () => false,
  setUsername: () => "",
  setArticleList: () => [],
});

export const UserContextProvider = ({ children }: any) => {
  const [userState, setUserState] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [articleList, setArticleList] = useState<Array<IArticle>>([]);

  // const getUsername = (currentUsername: string) => {
  //   setUsername(currentUsername);
  // };
  const getUserState = (user: boolean) => {
    setUserState(user);
  };
  // const getArticleList = (

  return (
    <UserContext.Provider
      value={{
        username,
        userState,
        articleList,
        setUsername: (currentUsername: string) => {
          setUsername(currentUsername);
        },
        // getUsername,
        setUserState: (user: boolean) => {
          setUserState(user);
        },
        setArticleList: (articles: IArticle[]) => {
          setArticleList(articles);
        },
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserContext;
