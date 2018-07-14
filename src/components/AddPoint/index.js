import  React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import {connect} from 'react-redux'
import ExpandBtn from '../ExpandBtn'
import {increment} from '../../AC'
import Form from './Form'
import Opener from '../../decorators/opener'
import './addPoint.css'

class AddPoint extends Component  {
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
        {/* <div>{this.props.counter}</div>
        <button onClick = {this.handleIncrement}>+++</button> */}
      </div>
    )
  }

  handleIncrement = () => {
    const {increment} = this.props
    increment()
  }

  getForm() {
    if (!this.props.isOpen) {return null}
    return <Form/>
  }

}

export default connect(state => {
  return ({
    counter: state.count
  })}, { increment })((Opener(AddPoint)))