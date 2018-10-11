import React from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import { commentsSelector } from '../selectors'

function Comment({ comment }) {
  return (
    <div>
      <p>
        {comment.text}
написал
        {' '}
        {comment.user}
      </p>
    </div>
  )
}

Comment.propTypes = {
  // id: propTypes.string.isRequired,
  comment: propTypes.shape({
    text: propTypes.string.isRequired,
    user: propTypes.string.isRequired,
  }).isRequired,
}

export default connect((state, ownProps) => ({
  comment: commentsSelector(state, ownProps),
}))(Comment)
