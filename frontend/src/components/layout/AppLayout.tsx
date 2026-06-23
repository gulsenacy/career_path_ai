import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function AppLayout() {
    return (
        <div className="app-layout">
            <Sidebar />

            <div className="main-area">
                <Topbar />

                <section className="content-area">
                    <Outlet />
                </section>
            </div>
        </div>
    );
}

export default AppLayout;