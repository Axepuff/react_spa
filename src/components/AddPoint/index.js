import  React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import ExpandBtn from '../ExpandBtn'
import Form from './Form'
import Opener from '../../decorators/opener'
import './addPoint.css'

class Header extends Component  {
  render() {
    return (
      <div className = 'add-btn'>
        <CSSTransition
          in = {this.props.isOpen}
          timeout = {300}
          appear
          classNames = 'fade'>
            <div>{this.getForm()}</div>
        </CSSTransition>
        <ExpandBtn toggleOpen = {this.props.toggleOpen} isOpen = {this.props.isOpen} txt = 'Добавить точку'/>
      </div>
    )
  }

  getForm() {
    if (!this.props.isOpen) {return null}
    return <Form/>
  }

}

export default Opener(Header)