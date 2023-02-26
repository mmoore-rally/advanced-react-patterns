// Compound Components
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'
import { isDOMComponent } from 'react-dom/test-utils'
import {Switch} from '../switch'

function Toggle({children}) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  return React.Children.map(children, (child) => {
    return allowedTypes.includes(child.type) ? React.cloneElement(child, {on, toggle}) : child
  })
}

const ToggleOn = ({on, children}) => on ? children : null 
const ToggleOff = ({on, children}) => on ? null : children
const ToggleButton = ({on, toggle}) => <Switch on={on} onClick={toggle} />

const allowedTypes = [ToggleOn, ToggleOff, ToggleButton]

function App() {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <span>Hello</span>
        <ToggleButton />
      </Toggle>
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
