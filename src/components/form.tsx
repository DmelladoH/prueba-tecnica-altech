import { useUsers } from "../hooks/useUsers";

export function UserForm() {
  const { addUser } = useUsers();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { elements } = event.currentTarget;

    const name = elements.namedItem("name");
    if (name == null || !(name instanceof HTMLInputElement)) return;
    if (name.value == "") return;

    const email = elements.namedItem("email");
    if (email == null || !(email instanceof HTMLInputElement)) return;
    if (email.value == "") return;

    const password = elements.namedItem("password");
    if (password == null || !(password instanceof HTMLInputElement)) return;
    if (password.value == "") return;

    addUser({
      id: crypto.randomUUID(),
      name: name.value,
      email: email.value,
      password: password.value,
    });

    alert(
      `Creating user: ${name.value} (${email.value}) with password ${password.value}`
    );

    name.value = "";
    email.value = "";
    password.value = "";
  };

  return (
    <section>
      <h3>Add new User</h3>
      <form onSubmit={onSubmit} aria-label="create users">
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Password:
          <input type="password" name="password" required />
        </label>
        <button type="submit">Create</button>
      </form>
    </section>
  );
}
