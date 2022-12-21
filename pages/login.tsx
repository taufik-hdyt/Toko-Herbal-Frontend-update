import { NextPage, NextPageContext } from "next/types";
import Login from "../containers/Login/Login";
import nookies from "nookies";

const LoginPage: NextPage = (): JSX.Element => {
  return <Login />;
};

export async function getServerSideProps(context: NextPageContext) {
  const cookies = nookies.get(context);
  if (cookies.token) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }
  return {
    props: {
      title: "Login",
    },
  };
}
export default LoginPage;
