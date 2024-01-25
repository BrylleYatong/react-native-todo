import React, { useContext, useState } from 'react'
import { View, TextInput, Button, Alert } from 'react-native'
import { styles } from '../assets/Styles'
import { context } from '../ContextProvider'
import { compareAsc, compareDesc, format } from 'date-fns'
import AsyncStorage from '@react-native-async-storage/async-storage';

function SearchBar(props: any) {
  const { value, action } = useContext<any>(context);
  const { handleSearch, setTodoList, setStateUpdate } = action ?? {}
  const { toDoList, stateUpdate } = value ?? {}
  const [buttonTitle, setButtonTitle] = useState<string>('Latest')

  const handleBtnClick = async () => {
    const btn_title = buttonTitle === 'Latest' ? 'Oldest' : 'Latest';
    const sorted_list = toDoList.sort((a: any, b: any) => {
      const formatted_a = new Date(a.date);
      const formatted_b = new Date(b.date);
      const sorted_date_latest = btn_title = 'Latest' ? formatted_b - formatted_a : formatted_a - formatted_b;
      return sorted_date_latest;
    });
    await AsyncStorage.setItem('toDoList', JSON.stringify([
      ...sorted_list
    ]));
    setStateUpdate(!stateUpdate);
    setButtonTitle(btn_title);
  }
  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchBar}
        onChangeText={text => handleSearch(text)}
      />
      <Button title={buttonTitle} onPress={handleBtnClick} />
    </View>
  )
}

export default SearchBar