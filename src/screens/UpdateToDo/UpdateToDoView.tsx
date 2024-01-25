import React, {useContext} from 'react'
import { View, TextInput, Button } from 'react-native'
import Section from '../../components/Section'
import { context } from '../../ContextProvider'
import { styles } from '../../assets/Styles'

function UpdateToDoView() {
    const { state, action } = useContext<any>(context);
    const { todo } = state ?? {}
    const { handleUpdateToDo, handleInputChange } = action ?? {}
  return (
    <Section title='Update Todo'>
        <View style={styles.inputContainer}>
            <TextInput
                value={todo?.title}
                style={styles.updateInput}
                id='title'
                onChangeText={
                    (text) => handleInputChange('title', text)
                }
                //@ts-ignore
                onChange={(e) => console.log(e.target?.value)}
            />
            <TextInput
                value={todo?.description}
                style={styles.updateInput}
                id='description'
                onChangeText={
                    (text) => handleInputChange('description', text)
                }
            />
            <Button title='Update' onPress={() => {
                handleUpdateToDo()
                action.navigation.navigate('Home');
            }} />
        </View>
        </Section>
  )
}

export default UpdateToDoView