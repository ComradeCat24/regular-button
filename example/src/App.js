import React from 'react'

import ExampleComponent from 'regular-button'
import 'regular-button/dist/index.css'

const App = () => {
  return (
    <ExampleComponent
      primary={true}
      label='xyz'
      size='large'
      //   backgroundColor='Red'
      onClick={() => alert()}
    />
  )
}

export default App
