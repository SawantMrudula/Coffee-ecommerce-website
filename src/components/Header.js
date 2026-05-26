

const Header = () => {
    return  (<header className="header" style={{backgroundColor: '#000'}} id="header">
    <nav className="nav container">
      <a href="#home" className="nav__logo">Coffee Harbour<span>.</span>co </a>

      <div className="nav__menu" id="nav-menu">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#home" className="nav__link active-link">Home</a>
          </li>
          <li className="nav__item">
            <a href="#products" className="nav__link">Products</a>
          </li>
          <li className="nav__item">
            <a href="#place" className="nav__link">Place</a>
          </li>
          <li className="nav__item">
            <a href="#blog" className="nav__link">Blog</a>
          </li>
          <li className="nav__item">
            <a href="/login" className="nav__link">Login</a>
          </li>
          <li className="nav__item">
            <a href="/registration" className="nav__link">Registration</a>
          </li>
        </ul>

        <div className="nav__close" id="nav-close">
          <i className="bx bx-x"></i>
        </div>
      </div>

      <div className="nav__toggle" id="nav-toggle">
        <i className="bx bx-grid-alt"></i>
      </div>
    </nav>
  </header>
);
}

export default Header;