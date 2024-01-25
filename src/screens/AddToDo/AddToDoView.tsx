import React, { useContext } from 'react'
import { TextInput, View, Button, Text } from 'react-native'
import Section from '../../components/Section'
import { context } from '../../ContextProvider'
import { styles } from '../../assets/Styles'

function AddToDoView() {
    const { action } = useContext<any>(context);
    const { handleAddToDo, handleInputChange } = action ?? {}

    return (
        <Section title='Add Todo'>
        <View style={styles.inputContainer}>
            <TextInput
                placeholder='Title'
                style={styles.addInput}
                id='title'
                onChangeText={
                    (text) => handleInputChange('title', text)
                }
                //@ts-ignore
                onChange={(e) => console.log(e.target?.value)}
            />
            <TextInput
                placeholder='Description'
                style={styles.addInput}
                id='description'
                onChangeText={
                    (text) => handleInputChange('description', text)
                }
            />
            <Button title='Add' onPress={() => {
                handleAddToDo()
                action.navigation.navigate('Home');
            }} />
        </View>
        </Section>
    )
}

export default AddToDoView