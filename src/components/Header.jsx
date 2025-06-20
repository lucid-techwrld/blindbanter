import logo from "../assets/blindbanter-LOGO.png";

const Header = () => {
  return (
    <div className="h-24 w-full p-3 bg-white fixed top-0 z-50">
      <img src={logo} alt="logo" className="h-full w-32" />
    </div>
  );
};

export default Header;
