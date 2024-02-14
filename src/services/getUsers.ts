import users from "./mockData.json";

export function getUsers(): Promise<User[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(users);
    }, 1000);
  });
}
