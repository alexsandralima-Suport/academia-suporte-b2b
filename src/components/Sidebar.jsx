import { NavLink } from "react-router-dom";
import { useState } from "react";
import { menu } from "../data/menu";
import logo from "../assets/logo.jpg";

export default function Sidebar() {
  const [openGroups, setOpenGroups] = useState({});
  const [menuOpen, setMenuOpen] = useState(true);

  function toggleGroup(title) {
    setOpenGroups((prev) => ({
      ...prev,
      [title]: !prev[title]
    }));
  }

  return (
    <>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={styles.hamburger}
      >
        ☰
      </button>

      {menuOpen && (
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
              fontWeight: isActive ? 700 : 600,
              backgroundColor: isActive ? "#004033" : "rgba(255, 255, 255, 0.06)",
              color: "#ffffff",
              borderLeft: isActive ? "4px solid #22c55e" : "4px solid transparent"
            })}
          >
            🏠 Início
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
                      fontWeight: isActive ? 600 : 400,
                      color: isActive ? "#ffffff" : "#e5e7eb",
                      backgroundColor: isActive ? "#004033" : "rgba(255,255,255,0.04)",
                      borderLeft: isActive
                        ? "4px solid #22c55e"
                        : "4px solid transparent",
                      paddingLeft: isActive ? "10px" : "12px"
                    })}
                  >
                    {item.label}
                  </NavLink>
                ))}
            </div>
          ))}
        </aside>
      )}
    </>
  );
}

const styles = {
  hamburger: {
    position: "fixed",
    top: 20,
    left: 20,
    fontSize: 22,
    backgroundColor: "#004033",
    color: "#fff",
    border: "none",
    padding: "8px 12px",
    borderRadius: 8,
    cursor: "pointer",
    zIndex: 1000,
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)"
  },
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
    marginBottom: 24,
    marginTop: 40
  },
  logo: {
    width: 140,
    marginBottom: 8
  },
  homeLink: {
    display: "block",
    marginBottom: 24,
    padding: "12px 14px",
    borderRadius: 10,
    textDecoration: "none",
    fontSize: 15,
    transition: "all 0.2s ease"
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
    padding: "9px 12px",
    margin: "4px 6px",
    borderRadius: 8,
    textDecoration: "none",
    fontSize: 14,
    color: "#e5e7eb",
    transition: "all 0.2s ease",
    borderLeft: "4px solid transparent",
    cursor: "pointer"
  }
};