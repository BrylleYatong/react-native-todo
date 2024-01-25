import React, { useState, useContext } from 'react'
import { context } from '../../ContextProvider'
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

function UpdateToDoProvider(props: any) {
    const { value, actions } = useContext<any>(context);
    const navigation = useNavigation();

    const route = useRoute();
    const { item }: any = route?.params ?? {}
    const [todo, setTodo] = useState<any>(item)

    const { toDoList, stateUpdate } = value ?? {}

    const { setStateUpdate } = actions ?? {}

    const handleInputChange = (key: string, text: string) => {
        if (key === 'title') {
            setTodo(
                (prev: any) => {
                    return {
                        ...prev,
                        title: text
                    }
                }
            )
        }
        if (key === 'description') {
            setTodo(
                (prev: any) => {
                    return {
                        ...prev,
                        description: text
                    }
                }
            )
        }
    }

    const handleUpdateToDo = async () => {
        if (todo?.title === '' || todo?.description === '') return
        const newTodo = toDoList?.map((item: any) => {
            if (item.id === todo?.id) {
                return todo
            }
            return item
        })
        await AsyncStorage.setItem('toDoList', JSON.stringify(newTodo));
        setStateUpdate(!stateUpdate);
        props?.navigation?.navigate('Home');
    }

    const action = {
        handleUpdateToDo,
        handleInputChange,
        navigation
    }

    return (
        <context.Provider value={{ state: { todo }, action }}>
            {props.children}
        </context.Provider>
    )
}

export default UpdateToDoProvider