import Filler from "../HomeComponents/Button/Filler";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import "./Header.css";

const Header = () => {
  return (
    <header id="header">
      <nav className="navbar navbar-expand-lg navbar-dark" id="nav">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">
            <img src="/logo-img.png" alt="Logo" className="logo" />
          </a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#aboutSection">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#menuSection">
                  Menu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#bookingSection">
                  Book
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contactSection">
                  Contact
                </a>
              </li>
            </ul>
            <div className="navbar-actions">
              <ThemeToggle />
              <Filler text="View Menu" color="var(--black-color" />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
