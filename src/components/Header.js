const Header = () => {
  return (
    <header>
      <h1 className="introduction">Tic Tac Toe</h1>
      <p style={description}>
        This is my first react app witht the goal of learning about states
      </p>
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
