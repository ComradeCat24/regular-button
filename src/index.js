import React from 'react'
import Button from './components/Button'

const ExampleComponent = ({ ...props }) => {
  return (
    <div>
      <Button {...props} />
    </div>
  )
}

export default ExampleComponent
