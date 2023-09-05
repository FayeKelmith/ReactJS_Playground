const Header = () => {
  return (
    <header>
      <h1 className="introduction">Counter</h1>
      <p style={description}>A digital counter.</p>
    </header>
  );
};

const description = {
  color: "#f9f9f9",
  backgroundColor: "#ff4747",
  padding: "10px",
  textAlign: "center",
  fontSize: "24px",
};
export default Header;
