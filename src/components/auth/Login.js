import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes('@')) {
      setError('Invalid email');
    } else {
      setError('');
      alert('Login successful!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
        data-testid="email-input"
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Login</button>
    </form>
  );
}

//PXTEEnkW7VtylebOiLlDsUlZ
/*{
    "projectId":"prj_r59rpTip2MYtbtFedJzfDoZytQcT",
    "orgId":"team_Zxm7GszrKA4bI7CTvRKw8W8t"}*/