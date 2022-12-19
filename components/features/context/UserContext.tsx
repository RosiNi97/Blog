import * as React from "react";
import { useState } from "react";
import { IArticle, UserContextType } from "../../../types/types";

const UserContext = React.createContext<UserContextType>({
  username: "",
  userState: false,
  articleList: undefined,
  getUserState: () => false,
  getUsername: () => "",
  getArticleList: () => [],
});

export const UserContextProvider = ({ children }: any) => {
  const [userState, setUserState] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [articleList, setArticleList] = useState<Array<IArticle>>();

  const getUsername = (currentUsername: string) => {
    setUsername(currentUsername);
  };
  const getUserState = (user: boolean) => {
    setUserState(user);
  };
  const getArticleList = (articles: IArticle) => {
    setArticleList([...[articles]]);
  };

  return (
    <UserContext.Provider
      value={{
        username,
        userState,
        articleList,
        getUsername,
        getUserState,
        getArticleList,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserContext;
