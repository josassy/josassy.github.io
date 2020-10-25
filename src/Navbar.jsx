import React from 'react';
import logo from './images/jl-logo-white-noborders.svg';
import HamburgerMenu from 'react-hamburger-menu';
// import { Link } from 'react-router-dom';
import { Link } from 'react-scroll';

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      width: window.innerWidth,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  handleClick() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { width }  = this.state;
    const isMobile = width <= 600;

    const scrollDuration = 500;

    return (
      <header>
      <nav className={ isMobile ? "" : "desktop" }>
          <Link to="home" id="header-logo" smooth duration={scrollDuration}><img src={logo} alt=""/></Link>
          <HamburgerMenu
            id="hamburger"
            isOpen={this.state.isOpen}
            menuClicked={this.handleClick.bind(this)}
            color='#ffffff'
          />
          <ul className={ this.state.isOpen ? "active" : "" }>
            <li><Link activeClass="active" to="home" spy smooth duration={scrollDuration}>Home</Link></li>
            <li><Link activeClass="active" to="projects" spy smooth duration={scrollDuration}>Projects</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Navbar;