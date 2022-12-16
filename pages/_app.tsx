import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/features/layout/Layuot";
import { UserContextProvider } from "../components/features/context/UserContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <UserContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserContextProvider>
    </div>
  );
}
