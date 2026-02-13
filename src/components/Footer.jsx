function Footer() {
  return (
    <footer style={footerStyle}>
      <p>
        © {new Date().getFullYear()} Student Management System | All Rights Reserved
      </p>
    </footer>
  );
}

const footerStyle = {
  textAlign: "center",
  padding: "15px",
  backgroundColor: "#f4f4f4",
  marginTop: "40px"
};

export default Footer;
