import styled from 'styled-components'
import Theme from '../../theme/Theme'

const { btns } = Theme

export default styled.button`
  grid-area: ${props => props.area};
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  color: ${props => (btns[props.theme].color ? btns[props.theme].color : btns.primary.color)};
  background: ${props => (btns[props.theme].bck ? btns[props.theme].bck : btns.primary.bck)};
  :hover {
    background: ${props => (btns[props.theme].hover ? btns[props.theme].hover : btns.primary.hover)};
  }
`
