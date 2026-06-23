import { NavLink } from "react-router-dom";

function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="sidebar-logo">
                <span className="logo-icon">C</span>
                <div>
                    <h2>CareerPath AI</h2>
                    <p>Growth Platform</p>
                </div>
            </div>

            <nav className="sidebar-nav">
                <NavLink to="/dashboard">Dashboard</NavLink>
                <NavLink to="/goals">Goals</NavLink>
                <NavLink to="/tasks">Tasks</NavLink>
                <NavLink to="/daily-logs">Daily Logs</NavLink>
                <NavLink to="/assessments">Assessments</NavLink>
                <NavLink to="/reports">Reports</NavLink>
                <NavLink to="/profile">Profile</NavLink>
            </nav>
        </aside>
    );
}

export default Sidebar;