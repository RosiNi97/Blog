import * as React from "react";
import { useState } from "react";
import { IArticle, UserContextType } from "../../../types/types";

const UserContext = React.createContext<UserContextType>({
  userBlogsList: undefined,
  username: "",
  userState: false,
  articleList: undefined,
  setUserState: () => false,
  setUsername: () => "",
  setArticleList: () => [],
  setUserBlogList: () => [],
});

export const UserContextProvider = ({ children }: any) => {
  const [userState, setUserState] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [articleList, setArticleList] = useState<Array<IArticle>>([]);
  const [userBlogsList, setUserBlogList] = useState<Array<IArticle>>([]);

  return (
    <UserContext.Provider
      value={{
        userBlogsList,
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
        setUserBlogList: (blogs: IArticle[]) => {
          setUserBlogList(blogs);
        },
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserContext;
