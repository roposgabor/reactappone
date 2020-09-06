import React, {Component} from 'react';
import './Header.scss';
import {Link} from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <header className="navBar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sign-up">Sing Up</Link>
          </li>
        </ul>
      </header>
    );
  }
}

Header.propTypes = {};

export default Header;
