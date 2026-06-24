import { useState, useEffect, type FormEvent } from "react";
import GoalCard from "../components/ui/GoalCard";

interface Goal {
  id: number;
  title: string;
  description?: string | null;
  category: string;
  status: string;
  targetDate: string | null;
  progress: number;
  createdAt: string;
  updatedAt?: string | null;
}

function GoalsPage() {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Technical Skills");
  const [targetDate, setTargetDate] = useState("");

  const fetchGoals = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("http://localhost:5176/api/goals");
      if (!response.ok) {
        throw new Error(`Failed to fetch goals (HTTP ${response.status})`);
      }
      const data = await response.json();
      setGoals(data);
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred while fetching goals.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchGoals();
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Do not add goals locally or to backend (GET-only)
  };

  return (
    <main className="page">
      <div className="page-header">
        <h1>Goals</h1>
        <p>Define and track your development goals.</p>
      </div>

      <div className="goals-layout">
        <section className="goal-form-card">
          <h2>Create New Goal</h2>
          <p>Add a development goal you want to track.</p>

          <form onSubmit={handleSubmit} className="goal-form">
            <div className="form-group">
              <label htmlFor="goal-title">Goal title</label>
              <input
                id="goal-title"
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder="Example: Learn React Router"
              />
            </div>

            <div className="form-group">
              <label htmlFor="goal-category">Category</label>
              <select
                id="goal-category"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
              >
                <option>Technical Skills</option>
                <option>Database</option>
                <option>Backend</option>
                <option>Frontend</option>
                <option>Career Preparation</option>
                <option>Personal Development</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="goal-date">Target date</label>
              <input
                id="goal-date"
                type="date"
                value={targetDate}
                onChange={(event) => setTargetDate(event.target.value)}
              />
            </div>

            <button type="submit" className="primary-button" disabled>
              Add Goal (Disabled)
            </button>
          </form>
        </section>

        <section className="goals-list">
          {isLoading && (
            <div className="goals-loading">
              <div className="spinner"></div>
              <p>Loading goals...</p>
            </div>
          )}

          {error && (
            <div className="goals-error">
              <p>{error}</p>
              <button type="button" onClick={fetchGoals} className="retry-button">
                Retry
              </button>
            </div>
          )}

          {!isLoading && !error && goals.length === 0 && (
            <div className="goals-empty">
              <p>No goals found. Define some goals in your career path!</p>
            </div>
          )}

          {!isLoading && !error && goals.map((goal) => (
            <GoalCard
              key={goal.id}
              title={goal.title}
              category={goal.category}
              targetDate={goal.targetDate ? goal.targetDate.split("T")[0] : ""}
              status={goal.status}
              progress={goal.progress}
            />
          ))}
        </section>
      </div>
    </main>
  );
}

export default GoalsPage;