import router from "next/router";

export const routerLogin = () => {
  router.push("/profile/login-page");
};

export const routerHome = () => {
  router.push("/");
};

export const routerProfile = () => {
  router.push("/profile/profile-page");
};
