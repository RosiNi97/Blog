import router from "next/router";

export const routerProfile = (userUID: string) => {
  router.push(`/navbar/${userUID}`);
};
export const routerLogin = () => {
  router.push("/navbar/loginPage");
};
