import React from 'react';
import logo from './images/jl-logo-white-noborders.svg';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
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

  render() {
    const { width }  = this.state;
    const isMobile = width <= 600;

    if (isMobile) {
      return (
        <header>
          <nav className="mobile">

            <a href="/"><img src={logo} alt="" id="header-logo"/></a>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/">Experience</a></li>
              <li><a href="/">Education</a></li>
              <li><a href="/">Contact</a></li>
            </ul>
          </nav>
        </header>
      )
    }
    else {
      return (
        <header>
          <nav>
            <a href="/"><img src={logo} alt="" /></a>
            <ul>
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
}

export default Header;
