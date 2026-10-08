function UserCard({ user }) {
  return (
    <article className="user-card">
      <h2>{user.name}</h2>

      <p>
        <strong>Email:</strong> {user.email}
      </p>

      <p>
        <strong>City:</strong> {user.address?.city || "N/A"}
      </p>
    </article>
  );
}

export default UserCard;
