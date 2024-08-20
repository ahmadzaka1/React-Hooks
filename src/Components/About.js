import React, { useContext } from 'react'
import context from './context'


function About() {
    const a = useContext(context)
  return (
    <div>Hi this is {a.name}</div>
  )
}

export default About