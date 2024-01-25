import React, { useContext, useState } from 'react'
import { context } from '../../ContextProvider'

function HomeProvider(props: any) {
  const { value, actions } = useContext<any>(context);
  const [searchVal, setSearchVal] = useState('')

    const handleSearch = ( value:string) => {
        setSearchVal(value)
    }
  
  const handleNavigate = () => {
    props.navigation.navigate('AddToDo')
  }

  const handleNavigateUpdate = (item:any) => {
    props.navigation.navigate('UpdateToDo', {item})
  }

  const action = {
    ...actions,
    handleNavigate,
    handleNavigateUpdate,
    handleSearch,
  }

  return (
    <context.Provider value={{
      value,
      action,
      searchVal
    }}>
      {props.children}
    </context.Provider>
  )
}

export default HomeProvider