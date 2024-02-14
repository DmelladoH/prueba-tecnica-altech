import { createContext, useState } from "react";

interface contextInterface {
  users: User[];
  addUser: (user: User) => void;
  setUsers: (users: User[]) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

export const UserContext = createContext<contextInterface>({
  users: [],
  isLoading: false,
  addUser: () => {},
  setUsers: () => {},
  setIsLoading: () => {},
});

export function UserProvider(props: { children: React.ReactNode }) {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function addUser(user: User) {
    setUsers([...users, user]);
  }

  return (
    <UserContext.Provider
      value={{ users, addUser, setUsers, isLoading, setIsLoading }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
