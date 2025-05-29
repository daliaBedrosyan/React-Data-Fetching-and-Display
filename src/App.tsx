import { useEffect, useState } from 'react';
import UserList from './components/UserList';
import type { User } from './types/User';
import './App.css'

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState('Loading...');
  const [error, setError] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        setLoading('');
        setError('Error loading users');
        return;
      }
      const data: User[] = await response.json();
      setUsers(data);
      setLoading('');
    } catch (error) {
      setLoading('');
      setError('Error loading users');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>User List</h1>
      {loading && <p>{loading}</p>}
      {error && <p>{error}</p>}
      <UserList users={users} />
    </>
  )
}

export default App
