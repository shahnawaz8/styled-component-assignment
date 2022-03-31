import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import styled from 'styled-components'
function App() {
  const [count, setCount] = useState(0)
  const Button = styled.button`
  background: ${props => props.primary ? "#2490fe" : "white"};
  color: ${props => props.primary ? "white" : props.link ? "bLue" : "black"};
  font-size: 1em;
  border:${props=>props.default ? "1px solid grey":props.dashes? "1px dashed grey": "none"};
  margin: 1em;
  padding: 10px 10px;
  border-radius: 2px;
`;

let divStyle ={
  "textAlign":"left",
  "margin-left":'20%',
  'background':'white',
  'margin-right':'20%',
  'margin-top':'100px'
}
  return (
    <div className="App" style={divStyle}>
            <Button primary>Primary Button</Button>
            <Button default>Default Button</Button>
            <Button dashes>Dashed Button</Button>
            <br/> 
            <Button>Text Button</Button>
            <Button link>Link Button</Button>
    </div>
  )
}

export default App
