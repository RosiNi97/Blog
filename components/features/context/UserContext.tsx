import { createContext, useState } from "react";
import { UserContextType } from "../../../types/types";

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserContextProvider = ({ children }: any) => {
  const [userState, setUserState] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [articleList, setArticleList] = useState<Array<object>>([{}]);

  const GetUsername = (currentUsername: string) => {
    setUsername(currentUsername);
  };
  const GetUserState = (user: boolean) => {
    setUserState(user);
  };
  const GetArticleList = (articles: Array<object>) => {
    setArticleList(articles);
  };

  return (
    <UserContext.Provider
      value={{
        username,
        userState,
        articleList,
        GetUsername,
        GetUserState,
        GetArticleList,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserContext;
