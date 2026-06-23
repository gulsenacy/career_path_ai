import StatCard from "../components/ui/StatCard";

// Mock Data for Category Performance
const categoryPerformance = [
  { name: "Problem Solving", score: 70, color: "#4f46e5", labelColor: "#4b5563" },
  { name: "Database", score: 80, color: "#10b981", labelColor: "#4b5563" },
  { name: "Backend", score: 55, color: "#8b5cf6", percentageColor: "#dc2626", labelColor: "#4b5563" },
  { name: "Frontend", score: 60, color: "#a5b4fc", labelColor: "#4b5563" },
  { name: "General", score: 75, color: "#6b7280", labelColor: "#4b5563" },
];

// Mock Data for Upcoming Tasks
const upcomingTasks = [
  {
    id: 1,
    title: "Review API Documentation",
    dueDate: "Due Tomorrow, 10:00 AM",
    color: "#3b82f6",
  },
  {
    id: 2,
    title: "Data Structures Lab 4",
    dueDate: "Due Thursday, 2:00 PM",
    color: "#a855f7",
  },
];

function DashboardPage() {
  return (
    <main className="page">
      <div className="page-header">
        <h1>Welcome back, Gülsena 👋</h1>
        <p>Here is your progress overview for this week.</p>
      </div>

      <section className="stats-grid">
        <StatCard
          title="Active Goals"
          value="4"
          trendText="+1 this month"
          trendType="success"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-blue">
              <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
              <line x1="4" y1="22" x2="4" y2="15"></line>
            </svg>
          }
        />
        <StatCard
          title="Completed Tasks"
          value="12"
          trendText="this week"
          trendType="neutral"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-green">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          }
        />
        <StatCard
          title="Daily Logs"
          value="8"
          trendText="this month"
          trendType="neutral"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-purple">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          }
        />
        <StatCard
          title="Assessment Score"
          value="72%"
          progress={72}
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-orange">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          }
        />
      </section>

      <div className="dashboard-grid">
        {/* Left Main Column */}
        <div className="dashboard-main-column">
          <section className="dashboard-card category-performance-card">
            <div className="card-header-with-actions">
              <h2>Category Performance</h2>
              <div className="toggle-tabs">
                <button className="tab-btn active">Weekly</button>
                <button className="tab-btn">Monthly</button>
              </div>
            </div>
            <div className="performance-list">
              {categoryPerformance.map((category) => (
                <div key={category.name} className="performance-row">
                  <div className="performance-info">
                    <span className="category-name">{category.name}</span>
                    <span 
                      className="category-score" 
                      style={{ color: category.percentageColor || '#111827' }}
                    >
                      {category.score}%
                    </span>
                  </div>
                  <div className="performance-progress-bar">
                    <div 
                      className="performance-progress-fill" 
                      style={{ width: `${category.score}%`, backgroundColor: category.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="dashboard-card upcoming-tasks-card">
            <h2>Upcoming Tasks</h2>
            <div className="tasks-list">
              {upcomingTasks.map((task) => (
                <div 
                  key={task.id} 
                  className="task-item" 
                  style={{ borderLeftColor: task.color }}
                >
                  <div className="task-details">
                    <h4>{task.title}</h4>
                    <p>{task.dueDate}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Sidebar Column */}
        <div className="dashboard-sidebar-column">
          <section className="insight-card-purple">
            <div className="insight-header">
              <div className="insight-icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
                </svg>
              </div>
              <h3>AI Growth Insight</h3>
            </div>
            <p className="insight-text">
              This week, you made consistent progress on your tasks. Your assessment results show that <strong>Backend Concepts</strong> and <strong>Problem Solving</strong> are areas that need more practice. Next week, focus on API basics and algorithmic thinking.
            </p>
            <button className="insight-btn">Personalize My Plan</button>
          </section>
        </div>
      </div>
    </main>
  );
}

export default DashboardPage;