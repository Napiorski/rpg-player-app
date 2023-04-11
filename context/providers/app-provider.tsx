import * as React from "react";

export const AppContext = React.createContext({
  user: "",
  login: (userInfo: string) => {},
  logout: () => {},
});

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<string>("");

  function login(userInfo: string) {
    setUser(userInfo);
  }

  function logout() {
    setUser("");
  }

  const value = React.useMemo(() => ({ user, login, logout }), [user]);
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
