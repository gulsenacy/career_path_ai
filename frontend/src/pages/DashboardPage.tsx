import StatCard from "../components/ui/StatCard";

const dashboardStats = [
  {
    title: "Active Goals",
    value: "4",
    description: "Goals currently in progress",
  },
  {
    title: "Completed Tasks",
    value: "12",
    description: "Tasks completed this week",
  },
  {
    title: "Daily Logs",
    value: "5",
    description: "Progress logs recorded",
  },
  {
    title: "Assessment Score",
    value: "72%",
    description: "Average assessment performance",
  },
];

function DashboardPage() {
  return (
    <main className="page">
      <div className="page-header">
        <h1>Dashboard</h1>
        <p>Track your goals, tasks, daily logs, and development progress.</p>
      </div>

      <section className="stats-grid">
        {dashboardStats.map((stat) => (
          <StatCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            description={stat.description}
          />
        ))}
      </section>

      <section className="dashboard-section">
        <div className="insight-card">
          <div>
            <p className="section-label">AI Growth Insight</p>
            <h2>Your personalized insight will appear here</h2>
            <p>
              CareerPath AI will analyze your goals, tasks, daily logs, and
              assessment results to generate personalized development
              recommendations.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default DashboardPage;