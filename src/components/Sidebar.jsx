import { NavLink } from "react-router-dom";
import { useState } from "react";
import { menu } from "../data/menu";
import logo from "../assets/logo.jpg";

export default function Sidebar() {
  const [openGroups, setOpenGroups] = useState({});

  function toggleGroup(title) {
    setOpenGroups((prev) => ({
      ...prev,
      [title]: !prev[title]
    }));
  }

  return (
    <aside style={styles.sidebar}>
      {/* Logo */}
      <div style={styles.logoContainer}>
        <img src={logo} alt="Jusbrasil Soluções" style={styles.logo} />
      </div>

      {/* Página inicial */}
      <NavLink
        to="/"
        style={({ isActive }) => ({
          ...styles.homeLink,
          fontWeight: isActive ? "bold" : "normal"
        })}
      >
        Página inicial
      </NavLink>

      {/* Menu */}
      {menu.map((group) => (
        <div key={group.title}>
          <button
            onClick={() => toggleGroup(group.title)}
            style={styles.titleButton}
          >
            {group.title}
            <span style={styles.icon}>
              {openGroups[group.title] ? "−" : "+"}
            </span>
          </button>

          {openGroups[group.title] &&
            group.items.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                style={({ isActive }) => ({
                  ...styles.link,
                  fontWeight: isActive ? 700 : 400,
                  color: isActive ? "#004033" : "#e5e7eb",
                  backgroundColor: isActive ? "rgba(0, 64, 51, 0.1)" : "transparent"
                })}
              >
                {item.label}
              </NavLink>
            ))}
        </div>
      ))}
    </aside>
  );
}
const styles = {
  sidebar: {
    width: 260,
    minHeight: "100vh",
    padding: "24px 18px",
    backgroundColor: "#212121",
    borderRight: "1px solid #111827",
    color: "#e5e7eb",
    boxShadow: "2px 0 12px rgba(0, 0, 0, 0.15)"
  },
  logoContainer: {
    textAlign: "center",
    marginBottom: 24
  },
  logo: {
    width: 140,
    marginBottom: 8
  },
  homeLink: {
    display: "block",
    marginBottom: 24,
    color: "#004033",
    textDecoration: "none",
    fontSize: 14,
    fontWeight: 400
  },
  titleButton: {
    width: "100%",
    background: "none",
    border: "none",
    color: "#e5e7eb",
    textAlign: "left",
    padding: "10px 4px",
    marginTop: 10,
    fontSize: 15,
    fontWeight: 600,
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  icon: {
    fontSize: 18,
    opacity: 0.7
  },
  link: {
    display: "block",
    padding: "8px 12px",
    margin: "4px 6px",
    borderRadius: 8,
    textDecoration: "none",
    fontSize: 14,
    color: "#e5e7eb",
    transition: "all 0.2s ease"
  }
};
