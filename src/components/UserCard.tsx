export default function UserCard({ name }: { name: string }) {
  return (
    <div className="user-card">
      <span>{name}</span>
    </div>
  );
}
