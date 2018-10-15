import React, { Component } from 'react'
import propTypes from 'prop-types'
// import { connect } from 'react-redux'
import Comment from '../Comment'
import ExpandBtn from '../ExpandBtn'
import CommentForm from '../CommentForm'
import opener from '../../decorators/opener'
import './CommentsList.css'


/* eslint-disable react/prefer-stateless-function */
class CommentsList extends Component {
  static propTypes = {
    point: propTypes.object,
    isOpen: propTypes.bool,
    toggleOpen: propTypes.func,
  }

  getBody() {
    const { isOpen, point } = this.props
    const { comments } = point
    if (!isOpen) { return null }
    if (!comments.length) { return null }
    return (
      <div>
        <h3>Комментарии</h3>
        <ul className="comments-list">
          {comments.map(id => <li key={id}><Comment id={id} /></li>)}
        </ul>
        <CommentForm />
      </div>
    )
  }

  render() {
    const { isOpen, toggleOpen } = this.props
    return (
      <div>
        {this.getBody()}
        <ExpandBtn type="button" toggleOpen={toggleOpen} isOpen={isOpen} txt="Комментарии" />
      </div>
    )
  }
}


export default opener(CommentsList)
