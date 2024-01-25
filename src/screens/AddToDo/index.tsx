import React from 'react'
import { View } from 'react-native'

import AddToDoProvider from './AddToDoProvider'
import AddToDoView from './AddToDoView'

function AddTodo(props:any) {
  return (
    <AddToDoProvider>
        <AddToDoView {...props}/>
    </AddToDoProvider>
  )
}

export default AddTodo