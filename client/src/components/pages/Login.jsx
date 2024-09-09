import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
    } catch (err) {
      setError("Failed to login. Please check your credentials.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-5 bg-gray-50">
      <div className="grid md:grid-cols-2 grid-cols-1 border rounded-3xl bg-white shadow-lg overflow-hidden">
        <div className="flex flex-col justify-center items-center p-5">
          <form onSubmit={handleLogin} className="w-full max-w-sm">
            <h1 className="text-center mb-8 font-bold text-3xl md:text-4xl">Login</h1>
            <input
              type="email"
              className="bg-gray-100 border outline-none rounded-md py-3 w-full px-4 mb-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <input
              type="password"
              className="bg-gray-100 border outline-none rounded-md py-3 w-full px-4 mb-4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 border outline-none rounded-md py-3 w-full px-4 font-semibold text-white mb-4"
            >
              Submit
            </button>
            <div className="flex justify-between">
              <Link 
                className="text-sm text-blue-500 hover:text-blue-800"
                to="/requestpasswordreset"
              >
                Forgot Password?
              </Link>
              <Link
                to="/signup"
                className="text-sm text-blue-500 hover:text-blue-800"
              >
                Don't have an account? Register!
              </Link>
            </div>
          </form>
        </div>
        <div className="md:block">
          <img
            src="https://img.freepik.com/premium-vector/vector-abstract-seamless-pattern-with-stars-blue-background_117177-1008.jpg"
            className="w-full h-full object-cover"
            alt="Login Background"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
