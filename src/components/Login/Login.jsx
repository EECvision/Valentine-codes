import React, { useState } from "react";
import { useFirebaseAuth, login } from "../../../firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./styles";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoading } = useFirebaseAuth();
  const authenticated = useSelector((state) => state.login.authenticated);
  const navigateTo = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigateTo("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  if (authenticated) {
    navigateTo("/dashboard");
  }

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Sign In"}
        </button>
      </form>
      <div style={styles.linkContainer}>
        <Link to="/register" style={styles.link}>
          Don&apos;t have an account? Sign Up
        </Link>
        <Link to="/forgot-password" style={styles.link}>
          Forgot Password?
        </Link>
      </div>
    </div>
  );
}
