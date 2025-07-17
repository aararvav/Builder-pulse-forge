// src/components/Login.tsx
import React, { useState } from "react";
import { auth } from "../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom"; // ✅ add this

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate(); // ✅

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
      navigate("/"); // ✅ redirect to homepage
    } catch (err: any) {
      alert(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate("/"); // ✅ redirect to homepage
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto shadow rounded bg-white">
      <h2 className="text-xl font-bold mb-4">{isLogin ? "Login" : "Register"}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full p-2 border rounded"
          required
        />
        <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded">
          {isLogin ? "Login" : "Register"}
        </button>
      </form>

      <div className="mt-4">
        <button
          onClick={handleGoogleLogin}
          className="w-full p-2 border rounded text-sm text-gray-800 flex items-center justify-center gap-2 hover:bg-gray-100"
        >
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
          Continue with Google
        </button>
      </div>

      <p className="mt-4 text-sm text-gray-600">
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <button className="text-blue-600" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Register here" : "Login here"}
        </button>
      </p>
    </div>
  );
};

export default Login;
