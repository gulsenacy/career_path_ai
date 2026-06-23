import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState<string>("Loading...");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetch("http://localhost:5176/api/health")
      .then((response) => {
        if (!response.ok) {
          throw new Error("API request failed");
        }

        return response.json();
      })
      .then((data) => {
        setMessage(data.message);
      })
      .catch((err) => {
        setError(err.message);
        setMessage("");
      });
  }, []);

  return (
    <main className="app-container">
      <section className="card">
        <p className="badge">CareerPath AI</p>

        <h1>Full-Stack Connection Test</h1>

        <p className="description">
          React frontend is connected to the ASP.NET Core backend.
        </p>

        <div className="status-box">
          {error ? (
            <span className="error">Error: {error}</span>
          ) : (
            <span className="success">{message}</span>
          )}
        </div>
      </section>
    </main>
  );
}

export default App;