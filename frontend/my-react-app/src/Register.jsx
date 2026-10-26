import { useState } from "react";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleRegister(e) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      setMessage(data.message);
    } catch {
      setMessage("Cannot connect to server");
    }
  }

  return (
    <>
      <h2 className="text-center mt-4 mb-4">Register Page</h2>

      <form className="container w-50" onSubmit={handleRegister}>
        <input
          className="form-control mb-3"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          className="form-control mb-3"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={8}
        />

        <button className="btn btn-success w-100" type="submit">
          Register
        </button>
      </form>

      <p className="text-center mt-3">{message}</p>
    </>
  );
}

export default Register;