import { createContext, useContext, useState } from "react";
type TUser = {
  username: string;
  email: string;
};

const defaultUser: TUser = {
  username: "",
  email: "",
};

const UserContext = createContext<{
  user: TUser;
  updateUser: (newUser: TUser) => void;
}>({
  user: defaultUser,
  updateUser: () => {},
});

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [user, setUser] = useState<TUser>({
    username: "123s",
    email: "s###",
  });

  const updateUser = (newUser: TUser) => {
    setUser(newUser);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
}
