import { useContext } from "react";
import { UserContext } from "../context/userContext";
import { getUsers } from "../services/getUsers";

export function useUsers() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUsers must be used within a UserProvider");
  }

  const { users, addUser, setUsers, isLoading } = context;

  const getInitialUsers = async () => {
    try {
      const users = await getUsers();
      setUsers(users);
    } catch (e) {
      throw new Error("error getting the users");
    }
  };

  return { users, addUser, isLoading, getInitialUsers };
}
