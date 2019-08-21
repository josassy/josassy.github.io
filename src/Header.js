import React from 'react';
import logo from './images/jl-logo-white-noborders.svg';
import HamburgerMenu from 'react-hamburger-menu';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      width: window.innerWidth,
    };
  }

  componentDidMount () {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  handleClick() {
    console.log("a click was handled");
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { width }  = this.state;
    const isMobile = width <= 600;

    return (
      <header>
      <nav className={ isMobile ? "mobile" : "desktop" }>
          <a href="/"><img src={logo} alt="" id="header-logo"/></a>
          <HamburgerMenu
            isOpen={this.state.isOpen}
            menuClicked={this.handleClick.bind(this)}
          />
          <ul className={ this.state.isOpen ? "active" : "" }>
            <li><a href="/">Home</a></li>
            <li><a href="/">Experience</a></li>
            <li><a href="/">Education</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header;
