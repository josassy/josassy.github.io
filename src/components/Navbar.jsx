import React from 'react';
import logo from '../images/jl-logo.svg';
import github from '../images/github-64.png';
import linkedin from '../images/linkedin-64.png';
import HamburgerMenu from 'react-hamburger-menu';
import { Link } from 'react-scroll';

export class Navbar extends React.Component {
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

  handleLinkClick = () => {
    this.setState({
      isOpen: false
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
            <li><Link onClick={this.handleLinkClick} activeClass="active" to="home" spy smooth duration={scrollDuration}>Home</Link></li>
            <li><Link onClick={this.handleLinkClick} activeClass="active" to="projects" spy smooth duration={scrollDuration}>Projects</Link></li>
            <li><Link onClick={this.handleLinkClick} activeClass="active" to="about" spy smooth duration={scrollDuration}>About</Link></li>
            <li id="break"><a className="social" href="https://github.com/josassy"><img alt="" src={github}></img></a></li>
            <li><a className="social" href="https://www.linkedin.com/in/josiahlansford"><img alt="" src={linkedin}></img></a></li>
          </ul>
        </nav>
      </header>
    )
  }
}
