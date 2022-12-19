import { JsxElement } from "typescript";

interface LayoutType {
  children: JsxElement;
}
export default LayoutType;

export interface UserContextType {
  username: string;
  userState: boolean;
  articleList: Array<IArticle> | undefined;
  getUsername: (username: string) => void;
  getUserState: (user: boolean) => void;
  getArticleList: (articles: IArticle) => void;
}

export interface IArticle {
  title: string;
  contents: string;
  videoID: string;
  id: string;
  username: string;
}
