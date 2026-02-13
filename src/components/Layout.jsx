import { Link } from "react-router-dom";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <nav style={navStyle}>
        <h2>Student Management System</h2>
        <div>
          <Link to="/">Home</Link> |{" "}
          <Link to="/add">Add Student</Link>
        </div>
      </nav>

      <main style={{ padding: "20px" }}>
        {children}
      </main>

      <Footer />
    </>
  );
}

const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  padding: "15px",
  backgroundColor: "#282c34",
  color: "white"
};

export default Layout;
