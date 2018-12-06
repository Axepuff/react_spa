import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import propTypes from 'prop-types'
import ExpandBtn from '../ExpandBtn'
import './Header.css'

class Header extends Component {
  static propTypes = {
    isOpen: propTypes.bool,
    toggleOpen: propTypes.func,
  }

  render() {
    const { children } = this.props
    return (
      <header className="header">
        <h1 className="header__title">{children}</h1>
      </header>
    )
  }
}

export default Header
