import React, { Component } from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import Comment from '../Comment'
import opener from '../../decorators/opener'


/* eslint-disable react/prefer-stateless-function */
class CommentsList extends Component {
  static propTypes = {
    point: propTypes.object,
    isOpen: propTypes.bool,
    toggleOpen: propTypes.func,
  }

  getBody({ point: comments = [] }) {
    const { isOpen } = this.props
    if (!isOpen) { return null }
    if (!comments.length) { return null }
    return (
      <ul>
        {comments.map(com => <li><Comment id={com.id} /></li>)}
      </ul>
    )
  }

  render() {
    const { isOpen, toggleOpen, point } = this.props
    return (
      <div>
        <button type="button" onClick={toggleOpen}>Показать комментарии</button>
        {this.getBody(point, isOpen)}
      </div>
    )
  }
}


export default opener(CommentsList)
