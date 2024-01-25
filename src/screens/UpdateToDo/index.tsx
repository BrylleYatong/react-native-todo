import React from 'react'

import UpdateToDoProvider from './UpdateToDoProvider'
import UpdateToDoView from './UpdateToDoView'

function UpdateToDo() {
  return (
    <UpdateToDoProvider>
        <UpdateToDoView />
    </UpdateToDoProvider>
  )
}

export default UpdateToDo