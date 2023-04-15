import * as React from "react";

export const AppContext = React.createContext({
  logout: () => {},
  username: "",
  setUsername: (username: string) => {},
});

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [username, setUsername] = React.useState<string>("");

  function logout() {
    setUsername("");
  }

  const value = React.useMemo(() => ({ logout, username, setUsername }), [username]);
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
