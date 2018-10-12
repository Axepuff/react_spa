import React from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import { commentsSelectorFactory } from '../selectors'

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

const mapStateToProps = () => {
  const commentsSelector = commentsSelectorFactory()
  return (state, ownProps) => ({
    comment: commentsSelector(state, ownProps),
  })
}

export default connect(mapStateToProps)(Comment)
