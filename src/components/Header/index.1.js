// import React, { Component } from 'react'
// import { CSSTransition } from 'react-transition-group'
// import propTypes from 'prop-types'
// import ExpandBtn from '../ExpandBtn'
// import Opener from '../../decorators/opener'
// import Calendar from '../Calendar'
// import './Header.css'

// class Header extends Component {
//   static propTypes = {
//     isOpen: propTypes.bool,
//     toggleOpen: propTypes.func,
//   }

//   getCalendar() {
//     const { isOpen } = this.props

//     if (!isOpen) { return null }
//     return <Calendar />
//   }

//   render() {
//     const { isOpen, toggleOpen } = this.props
//     return (
//       <header className="header">
//         <CSSTransition
//           in={isOpen}
//           timeout={300}
//           appear
//           classNames="fade"
//         >
//           <div>{this.getCalendar()}</div>
//         </CSSTransition>
//         <ExpandBtn toggleOpen={toggleOpen} isOpen={isOpen} txt="Календарь" />
//       </header>
//     )
//   }
// }

// export default Opener(Header)
