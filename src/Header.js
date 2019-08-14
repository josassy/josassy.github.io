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

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width }  = this.state;
    const isMobile = width <= 500;

    if (isMobile) {
      return (
        <header>
          <a href="/"><img src={logo} alt="" className="header header-top"/></a>
        </header>
      )
    }
    else {
      return (
        <header>
          <a href="/"><img src={logo} alt="" className="header header-top"/></a>
            <nav>
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
