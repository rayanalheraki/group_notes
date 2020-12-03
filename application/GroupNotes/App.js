import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { StyleSheet, Text, View ,Button,TouchableOpacity} from 'react-native';
import 'react-native-gesture-handler';
import { Card, ListItem ,Icon } from 'react-native-elements'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'; 
import HomeScreen from './screens/HomeScreen';
import JoinGroup  from './screens/JoinGroup';
import NewGroup   from './screens/NewGroup';


const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen 
          name="HomeScreen" 
          backgroundColor="red"
          component={HomeScreen}
          options={{
            headerStyle: {
              backgroundColor: '#e84545',
            },
            //header text color
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitle: "Ana Sayafa",
            headerRight: () => (
              <View style={{flexDirection: "row",justifyContent: "flex-end",marginRight:15, width: 120}} >
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => alert('This is a button!')}
                  >
                   <Text style={styles.text}>+</Text>
                </TouchableOpacity>
              </View>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  button:{
    alignItems: "center",
    backgroundColor: "white",
    paddingTop:5 ,
    paddingBottom:5 ,
    width:45,
    borderRadius:30
  },
  text: {
    color:"#2b2e4a",
    fontSize:20
  },
});
