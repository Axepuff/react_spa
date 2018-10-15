import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import './CommentForm.css'

const limits = {
  user: 20,
  comment: 60,
}

class CommentForm extends Component {
  state = {
    user: '',
    comment: '',
  }


  getClassName = (type) => {
    const { [type]: value } = this.state
    return value.toString().length > limits[type]
      ? 'comment-form__input comment-form__input_wrong'
      : 'comment-form__input '
  }


  inputHandler = type => (event) => {
    const { value } = event.target
    if (value.toString().length > limits[type] + 1) {
      return
    }
    this.setState({
      [type]: event.target.value,
    })
  }


  render() {
    const { user, comment } = this.state
    return (
      <form className="comment-form">
        <input
          value={user}
          onChange={this.inputHandler('user')}
          className={this.getClassName('user')}
          placeholder="ваше имя"
        />
        <input
          value={comment}
          onChange={this.inputHandler('user')}
          className={this.getClassName('comment')}
          placeholder="комментарий"
        />
        <button type="button" className="comment-form__button">Добавить</button>
      </form>
    )
  }
}


export default CommentForm
