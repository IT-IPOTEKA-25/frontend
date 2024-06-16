import React, { useState } from "react";
import { sayHello } from "./grpcClient";

const HelloComponent = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await sayHello(name);
      setMessage(response);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Say Hello"}
        </button>
      </form>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {message && <p>{message}</p>}
    </div>
  );
};

export default HelloComponent;
