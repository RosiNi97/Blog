import { JsxElement } from "typescript";

interface LayoutType {
  children: JsxElement;
}
export default LayoutType;

export interface UserContextType {
  username: string;
  userState?: boolean;
  articleList: Array<object> | undefined;
  GetUsername: (username: string) => void;
  GetUserState: (user: boolean) => void;
  GetArticleList: (articles: Array<object>) => void;
}
