import { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      name,
      email,
      password,
    });
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-red-950 via-black/90 to-black flex items-center justify-center">
      <div className="bg-black/80 p-12 rounded-md w-112.5">
        <h1 className="text-white text-4xl font-bold mb-8">
          Sign Up
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-4 rounded bg-zinc-800 text-white"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-4 rounded bg-zinc-800 text-white"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-4 rounded bg-zinc-800 text-white"
          />

          <button
            type="submit"
            className="bg-red-600 text-white py-3 rounded hover:bg-red-700"
          >
            Create Account
          </button>

        </form>
      </div>
    </div>
  );
};

export default Signup;