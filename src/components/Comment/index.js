import React from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'

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
  comment: state.comments.find(comment => comment.id === ownProps.id),
}))(Comment)
