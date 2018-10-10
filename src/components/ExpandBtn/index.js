import React from 'react'
import { PropTypes } from 'prop-types'
import './ExpandBtn.css'


export default function ExpandBtn(props) {
  return (
    <button type="button" className="expand-btn" onClick={props.toggleOpen}>
      {props.isOpen ? `- ${props.txt} -` : `+ ${props.txt} +`}
    </button>
  )
}

ExpandBtn.propTypes = {
  toggleOpen: PropTypes.func,
  isOpen: PropTypes.bool,
  txt: PropTypes.string,
}
