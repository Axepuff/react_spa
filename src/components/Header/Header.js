import  React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import ExpandBtn from './ExpandBtn'
import Opener from '../../decorators/opener'
import Calendar from './Calendar'
import './Header.css'

class Header extends Component  {
  render() {
    return (
      <header className = 'header'>
        <CSSTransition
          in = {this.props.isOpen}
          timeout = {300}
          appear
          classNames = 'fade'>
            <div>{this.getCalendar()}</div>
        </CSSTransition>
        <ExpandBtn toggleOpen = {this.props.toggleOpen}/>
      </header>
    )
  }

  getCalendar() {
    if (!this.props.isOpen) {return null}
    return <Calendar/>
  }

}

export default Opener(Header)