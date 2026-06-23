import { useLocation } from "react-router-dom";

const pageTitles: Record<string, string> = {
    "/dashboard": "Dashboard",
    "/goals": "Goals",
    "/tasks": "Tasks",
    "/daily-logs": "Daily Logs",
    "/assessments": "Assessments",
    "/reports": "Reports",
    "/profile": "Profile",
};

function Topbar() {
    const location = useLocation();
    const title = pageTitles[location.pathname] || "CareerPath AI";

    return (
        <header className="topbar">
            <div>
                <h1>{title}</h1>
                <p>Track your career growth and daily progress.</p>
            </div>

            <div className="topbar-user">
                <span>Gülsena</span>
                <div className="user-avatar">G</div>
            </div>
        </header>
    );
}

export default Topbar;