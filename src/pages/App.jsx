import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Alumni from "./pages/Alumni";
import Opportunities from "./pages/Opportunities";
import MapPage from "./pages/Map";
import Insights from "./pages/Insights";
import { LayoutDashboard, Users, Briefcase, MapPin, Brain, CircleDot } from "lucide-react";
import "./App.css";

const NAV = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, component: Dashboard },
  { id: "alumni", label: "Alumni", icon: Users, component: Alumni },
  { id: "opportunities", label: "Opportunities", icon: Briefcase, component: Opportunities },
  { id: "insights", label: "Insights", icon: Brain, component: Insights },
  { id: "map", label: "Map", icon: MapPin, component: MapPage },
];

export default function App() {
  const [active, setActive] = useState("dashboard");
  const Current = NAV.find(n => n.id === active)?.component || Dashboard;

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="logo">
          <CircleDot size={28} color="#6366f1" />
          <div>
            <span className="logo-title">Circle of Good</span>
            <span className="logo-sub">Alumni Intelligence</span>
          </div>
        </div>
        <nav className="nav">
          {NAV.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              className={`nav-item ${active === id ? "active" : ""}`}
              onClick={() => setActive(id)}
            >
              <Icon size={18} />
              {label}
            </button>
          ))}
        </nav>
        <div className="sidebar-footer">
          <p>Hackathon MVP v1.0</p>
        </div>
      </aside>
      <main className="main-content">
        <Current />
      </main>
    </div>
  );
}
