import router from "next/router";

export const routerLogin = () => {
  router.push("/navbar/loginPage");
};

export const routerHome = () => {
  router.push("/");
};

export const routerProfile = () => {
  router.push("/navbar/profilePage");
};
