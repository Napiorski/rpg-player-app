import { BehaviorSubject } from "rxjs";
import getConfig from "next/config";
import Router from "next/router";
import { fetchWrapper } from "helpers/api/fetch.wrapper";

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}/users`;
const username: string | null = window.localStorage.getItem("user");
const userSubject = new BehaviorSubject(
  process.browser && username && JSON.parse(username)
);

export const userService = {
  user: userSubject.asObservable(),
  get userValue() {
    return userSubject.value;
  },
  login,
  logout,
  getAll,
};

function login(username: any, password: any) {
  return fetchWrapper
    .post(`${baseUrl}/authenticate`, { username, password })
    .then((user: any) => {
      // publish user to subscribers and store in local storage to stay logged in between page refreshes
      userSubject.next(user);
      window.localStorage.setItem("user", JSON.stringify(user));

      return user;
    });
}

function logout() {
  // remove user from local storage, publish null to user subscribers and redirect to login page
  window.localStorage.removeItem("user");
  userSubject.next(null);
  Router.push("/login");
}

function getAll() {
  return fetchWrapper.get(baseUrl);
}
