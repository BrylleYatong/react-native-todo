import AsyncStorage from '@react-native-async-storage/async-storage';
import { format } from 'date-fns';
import React, { createContext, useEffect, useState } from 'react'

const initialContext = {}

export const context = createContext(initialContext);

function ContextProvider(props: any) {
  const [stateUpdate, setStateUpdate] = useState(false)
  const [toDoList, setToDoList] = useState([
    // {
    //   title: 'First todo',
    //   id: 1,
    //   description: 'first to do in the list',
    //   date: format(new Date(), "yyyy-MM-dd HH:mm a")
    // },
    // {
    //   title: 'Second todo',
    //   id: 2,
    //   description: 'second to do in the list',
    //   date: format(new Date(), "yyyy-MM-dd HH:mm a")
    // },
  ]);

  useEffect(() => {
    const getToDoList = async () => {
      try {
        const todo_list = await AsyncStorage.getItem('toDoList');
        if (toDoList !== null && todo_list?.length !== toDoList?.length) {
          if (todo_list !== null) {
            setToDoList(JSON.parse(todo_list));
          }
        }
      } catch (error) {
        throw error
      }
    }
    getToDoList();
  }, [stateUpdate])

  const value = {
    toDoList,
    stateUpdate
  }
  const actions = {
    setToDoList,
    setStateUpdate
  }
  return (
    <context.Provider value={{
      value,
      actions
    }}>
      {props.children}
    </context.Provider>
  )
}

export default ContextProvider