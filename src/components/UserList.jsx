import UserCard from "./UserCard";

function UserList({ users }) {
  return (
    <section className="user-list" aria-label="Users">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </section>
  );
}

export default UserList;
