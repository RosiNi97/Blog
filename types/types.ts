import { JsxElement } from "typescript";

interface LayoutType {
  children: JsxElement;
}
export default LayoutType;

export interface UserContextType {
  username: string;
  userState: boolean;
  articleList: Array<IArticle> | undefined;
  userBlogsList: Array<IArticle> | undefined;
  setUsername: (username: string) => void;
  setUserState: (user: boolean) => void;
  setUserBlogList: (articles: IArticle[]) => void;
  setArticleList: (articles: IArticle[]) => void;
}

export interface IArticle {
  title: string;
  contents: string;
  videoID: string;
  id: string;
  username: string;
}
