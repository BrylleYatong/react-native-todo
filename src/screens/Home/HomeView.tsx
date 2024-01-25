import React, { useState, useContext } from 'react'
import { View, FlatList, Button } from 'react-native'
import Section from '../../components/Section'
import SearchBar from '../../components/SearchBar'
import { context } from '../../ContextProvider'
import Todo from '../../components/Todo'
import { styles } from '../../assets/Styles'

function HomeView(props:any) {
  const { value, action, searchVal } = useContext<any>(context);
  const { toDoList } = value ?? {}
  const { handleNavigate } = action ?? {}
  
  const filteredTodoList = toDoList.filter((item:any) => item.title.includes(searchVal))


  return (
    <Section title='To Do App'>
      <SearchBar {...action} />
      <View style={styles.container}>
        {/* <FlatList
          data={toDoList}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <Todo {...item} />}
        /> */}
        {filteredTodoList?.map((item:any) => <Todo {...item} action={action} />)}
      </View>
      <Button
        title='Add Todo'
        onPress={handleNavigate}
      />
    </Section>
  )
}

export default HomeView