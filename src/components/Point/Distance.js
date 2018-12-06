import styled from 'styled-components'

export default styled.div`
  background: ${props => (props.remote < 100 ? 'green' : 'red')};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: d;
`
