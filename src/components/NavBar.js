/* Styles */
import { ThemeButton, NavLinkStyled, Logo } from "../styles";
import SignupButton from "./buttons/SignupButton";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Logo to="/" className="navbar-brand">
            <img
              src="https://image.flaticon.com/icons/png/512/1164/1164620.png"
              alt={"logo"}
            />
          </Logo>
          <ThemeButton onClick={props.toggleTheme}>
            {props.currentTheme === "light" ? "Dark" : "Light"} mode{" "}
          </ThemeButton>
          <SignupButton />
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <NavLinkStyled to="/products" className="nav-item">
              Products
            </NavLinkStyled>
            <NavLinkStyled to="/shops" className="nav-item">
              shops
            </NavLinkStyled>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
