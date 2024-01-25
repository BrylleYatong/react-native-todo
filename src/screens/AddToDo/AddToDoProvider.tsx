import React, { useState, useContext } from 'react'
import { context } from '../../ContextProvider'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { format } from 'date-fns';

function AddToDoProvider(props: any) {
    const { value,actions } = useContext<any>(context);
    const [todo, setTodo] = useState<any>({})
    const navigation = useNavigation();

    const date=format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
    console.log("%c 💂‍♂️: AddToDoProvider -> date,", "font-size:16px;background-color:#74ecc8;color:black;", date)

    const { setStateUpdate } = actions ?? {}
    const { toDoList, stateUpdate } = value ?? {}    

    const handleInputChange = (key: string, text: string) => {
        if(key === 'title'){
            setTodo(
                (prev: any) => {return{...prev,
                    title: text
                }}
            )
        }
        if(key === 'description'){
            setTodo(
                (prev: any) => {return{...prev,
                    description: text
                }}
            )
        }
    }

    const handleAddToDo = async () => {
        if(todo?.title === '' || todo?.description === '') return
        try {
            await AsyncStorage.setItem('toDoList', JSON.stringify([
                ...toDoList, 
                {
                    ...todo, 
                    id: new Date().getTime(),
                    date: format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx") 
                }
            ]));
            // setToDoList(
            //     (prev: any) => ([
            //         ...prev, 
            //         {
            //             ...todo, 
            //             id: new Date().getTime(), 
            //             date: new Date().toLocaleDateString()
            //         }
            //     ])
            // );
            setStateUpdate(!stateUpdate);
            props?.navigation?.navigate('Home');
        } catch (error) {
            throw error
        }
        
    }

    const action = {
        handleAddToDo,
        handleInputChange,
        navigation
    }

    return (
        <context.Provider value={{ action }}>
            {props.children}
        </context.Provider>
    )
}

export default AddToDoProvider