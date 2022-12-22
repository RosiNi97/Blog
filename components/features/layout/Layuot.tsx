import { IProps } from "../../../types/types";
import Navbar from "../navbar/Navbar";

const Layout = ({ children }: IProps) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};
export default Layout;
