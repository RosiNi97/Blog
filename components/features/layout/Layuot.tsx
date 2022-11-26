import { ReactComponentElement, ReactElement } from "react";
import { JSDocAllType, JsxAttribute, JsxElement } from "typescript";
import Navbar from "../navbar/Navbar";
import LayoutType from "../../../types/types";

const Layout = ({ children }: any) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};
export default Layout;
