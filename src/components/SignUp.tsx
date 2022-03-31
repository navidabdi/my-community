// import { useSignUp } from '../hooks/useSignUp';
import { useState } from 'react';

const SignUp = () => {
  //   const [email, setEmail] = useState<string>('');
  //   const [name, setName] = useState<string>('');
  //   const [password, setPassword] = useState<string>('');

  //   const signup = useSignUp();

  return (
    <section className="container bg-white p-5 rounded-lg md:p-14 sm:p-10">
      <h1 className="text-2xl font-bold text-blue-900 mb-5">Sign Up</h1>
      <label className="input-label">Email</label>
      <input
        className="input"
        type="email"
        placeholder="Your Email e.g. davidpheel@gmail.com"
        // onChange={(event) => setEmail(event.target.value)}
      />
      <label className="input-label">Name</label>
      <input
        className="input"
        type="text"
        placeholder="Your Name e.g. David"
        // onChange={(event) => setName(event.target.value)}
      />
      <label className="input-label">Password</label>
      <input
        className="input"
        type="password"
        placeholder="********"
        // onChange={(event) => setPassword(event.target.value)}
      />
      <div
        className="bg-blue-50 border-t border-b border-blue-200 text-blue-600 px-4 py-3"
        role="alert"
      >
        <p className="text-sm">
          Password should have 1 lowercase letter, 1 uppercase letter, 1 number,
          1 special character and be at least 10 characters long.
        </p>
      </div>
      <button
        className="bg-blue-600 hover:bg-blue-800 transition-all duration-100 ease-in p-4 text-blue-50 text-[1rem] font-semibold w-full sm:w-1/2 mt-5 rounded-[.3rem] leading-3"
        // onClick={() => {
        //   signup(email, name, password);
        // }}
      >
        Sign Up
      </button>
    </section>
  );
};

export default SignUp;
