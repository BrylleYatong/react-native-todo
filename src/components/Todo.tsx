import React, { useContext } from 'react'
import { View, Text, Button, Alert, Touchable, TouchableOpacity } from 'react-native'
import { styles } from '../assets/Styles'
import { context } from '../ContextProvider'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { format } from 'date-fns'

function Todo(props: any) {
  const { title, description, date, id } = props ?? {}
  const { value, action } = useContext<any>(context);
  const { setToDoList, handleNavigateUpdate, setStateUpdate } = action ?? {}
  const { toDoList, stateUpdate } = value ?? {}

  const handleBtnClick = () => {
    Alert.alert(
      `Delete ${title}?`,
      "Are you sure you want to delete this to do?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "OK",
          onPress: async () => {
            console.log("OK Pressed")
            await AsyncStorage.setItem('toDoList', JSON.stringify([
              ...toDoList.filter((item: any) => item.id !== props.id)
            ]));
            setStateUpdate(!stateUpdate);
            // setToDoList(
            //     (prev: any) => ([
            //         ...prev.filter((item:any) => item.id !== props.id)
            //     ])
            // );
          }
        }
      ]
    );
  }
  return (
    <View key={id} style={styles.todoContainer}>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => handleNavigateUpdate({ title, description, date, id })}
        onLongPress={() => handleBtnClick()}
      >
        <View>
          <View style={styles.todoTitle}>
            <Text>{title}</Text>
          </View>
          <View style={styles.todoDescription}>
            <Text>{description}</Text>
          </View>
          <View style={styles.todoDescription}>
            <Text>{
              format(new Date(date), "yyyy-MM-dd HH:mm a")
            }</Text>
          </View>
        </View>
      </TouchableOpacity>
      {/* <Button title='Delete' onPress={handleBtnClick} /> */}
    </View>
  )
}

export default Todo