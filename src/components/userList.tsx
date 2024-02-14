import { Link } from "react-router-dom";
import { useUsers } from "../hooks/useUsers";
import UserCard from "./UserCard";

export function UserList() {
  const { users, isLoading } = useUsers();

  return (
    <>
      <section>
        <h3>User List</h3>

        {isLoading && <p>loading...</p>}
        {!isLoading && users.length === 0 ? (
          <p>No users</p>
        ) : (
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                <UserCard name={user.name} />
              </li>
            ))}
          </ul>
        )}
      </section>
      <footer className="profile-footer">
        <Link to="/profile">Add new user</Link>
      </footer>
    </>
  );
}
