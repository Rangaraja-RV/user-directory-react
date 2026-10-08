import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import UserList from "./components/UserList";
import "./App.css";

const API_URL = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
        setError("Unable to load users. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) => {
    const query = search.toLowerCase().trim();

    return (
      user.name.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query)
    );
  });

  return (
    <main className="app">
      <header className="app-header">
        <h1>User Directory</h1>
      </header>

      <SearchBar
        search={search}
        onSearch={setSearch}
      />

      {loading && (
        <p className="status" role="status">
          Loading users...
        </p>
      )}

      {error && (
        <p className="status error" role="alert">
          {error}
        </p>
      )}

      {!loading && !error && filteredUsers.length === 0 && (
        <p className="status">
          No matching users found.
        </p>
      )}

      {!loading && !error && filteredUsers.length > 0 && (
        <UserList users={filteredUsers} />
      )}
    </main>
  );
}

export default App;
