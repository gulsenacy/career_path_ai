import { useState, type FormEvent } from "react";
import GoalCard from "../components/ui/GoalCard";

type Goal = {
  id: number;
  title: string;
  category: string;
  targetDate: string;
  status: string;
  progress: number;
};

const initialGoals: Goal[] = [
  {
    id: 1,
    title: "Improve React fundamentals",
    category: "Technical Skills",
    targetDate: "2026-07-05",
    status: "In Progress",
    progress: 35,
  },
  {
    id: 2,
    title: "Practice SQL queries",
    category: "Database",
    targetDate: "2026-07-12",
    status: "In Progress",
    progress: 20,
  },
];

function GoalsPage() {
  const [goals, setGoals] = useState<Goal[]>(initialGoals);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Technical Skills");
  const [targetDate, setTargetDate] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!title.trim()) {
      return;
    }

    const newGoal: Goal = {
      id: Date.now(),
      title,
      category,
      targetDate,
      status: "In Progress",
      progress: 0,
    };

    setGoals([newGoal, ...goals]);
    setTitle("");
    setCategory("Technical Skills");
    setTargetDate("");
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

            <button type="submit" className="primary-button">
              Add Goal
            </button>
          </form>
        </section>

        <section className="goals-list">
          {goals.map((goal) => (
            <GoalCard
              key={goal.id}
              title={goal.title}
              category={goal.category}
              targetDate={goal.targetDate}
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