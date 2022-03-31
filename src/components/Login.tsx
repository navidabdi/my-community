import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const login = useLogin();

  return (
    <section className="container shadow-sm bg-white p-5 rounded-lg md:p-14 sm:p-10">
      <h1 className="text-2xl font-bold text-blue-900 mb-5">Login</h1>
      <label className="input-label">Email</label>
      <input
        className="input"
        type="email"
        placeholder="Your Email e.g. davidpheel@gmail.com"
        autoComplete="off"
        onChange={(event) => setEmail(event.target.value)}
      />
      <label className="input-label">Password</label>
      <input
        className="input"
        type="password"
        placeholder="********"
        autoComplete="off"
        onChange={(event) => setPassword(event.target.value)}
      />
      <button
        className="btn"
        onClick={() => {
          login(email, password);
        }}
      >
        Login
      </button>
    </section>
  );
};

export default Login;
