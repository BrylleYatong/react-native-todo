/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import { useColorScheme, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import ContextProvider from './src/ContextProvider';
import Home from './src/screens/Home';
import AddToDo from './src/screens/AddToDo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UpdateToDo from './src/screens/UpdateToDo';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {

  return (
    <ContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen
            name='Home'
            component={Home}
          />
          <Stack.Screen
            name='AddToDo'
            component={AddToDo}
          />
          <Stack.Screen
            name='UpdateToDo'
            component={UpdateToDo}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ContextProvider>

  );
}


export default App;

// return (
//   // <SafeAreaView 
//   //   style={backgroundStyle}
//   // >
//   //   <StatusBar
//   //     barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//   //     backgroundColor={backgroundStyle.backgroundColor}
//   //   />
//     // <ScrollView
//     //   contentInsetAdjustmentBehavior="automatic"
//     //   style={backgroundStyle}
//     //   >
//       <View
//         style={{
//           backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           height:'100%',
//           borderColor:'1px solid black',
//         }}>
//           <Home/>
//       </View>
//     // </ScrollView>
//   // </SafeAreaView>
// );
// }


// {/* <Header /> 
// <Section title="Kuya Brylle Ohaha">
//    Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//            screen and then come back to see your edits.
//  </Section>
//  <Section title="See Your Changes">
//     {/* <ReloadInstructions /> */}
//  </Section>
//  <Section title="Debug">
//     {/* <DebugInstructions /> */}
//  </Section>
//  <Section title="Learn More">
//      Read the docs to discover what to do next:
//  </Section>
//  <LearnMoreLinks /> */}