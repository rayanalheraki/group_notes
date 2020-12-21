import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import GroupOp from './screens/GroupOp';
import CreateGroup from './screens/CreateGroup';
import JoinGroup from './screens/JoinGroup';
import GroupScreen from './screens/GroupScreen';
import Note from './components/Note';
import NoteEdit from './components/NoteEdit';
import NetInfo from "@react-native-community/netinfo";
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('Groups.db');



const Stack = createStackNavigator();


export default function App() {
  const [isConnected, setIsConnectd] = useState(true);


  useEffect(() => {


    NetInfo.fetch().then(state => {
      setIsConnectd(state.isConnected);

    });

    db.transaction(tx => {
      tx.executeSql(
        'create table if not exists MyGroups (id integer primary key not null  , GroupId text NOT NULL UNIQUE ,groupCode text , groupName text);'),
        [],
        () => console.log("Created table"), () => console.log("Error")
    });


  }, []);


  return (
    <NavigationContainer  >
      <Stack.Navigator
        initialRouteName="HomeScreen"

        screenOptions={{
          headerStyle: {
            backgroundColor: '#e84545',
          },
          //header text color
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}

      >
        <Stack.Screen
          name="HomeScreen"
          backgroundColor="red"
          component={HomeScreen}
          options={({ navigation }) => ({

            headerTitle: "Your Groups",
            headerRight: () => (
              <View style={{ flexDirection: "row", justifyContent: "flex-end", marginRight: 15, width: 120 }} >

                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    navigation.navigate('newGroup')

                  }}
                >
                  <Text style={styles.text}>+</Text>
                </TouchableOpacity>
              </View>
            ),
          })}
        />
        <Stack.Screen name="newGroup" component={GroupOp} options={() => ({ headerTitle: "New Group" })} />
        <Stack.Screen name="createGroup" component={CreateGroup} options={() => ({ headerTitle: "Create a Group" })} />
        <Stack.Screen name="joinGroup" component={JoinGroup} options={() => ({ headerTitle: "Join a Group" })} />
        <Stack.Screen name="groupScreen" component={GroupScreen} options={() => ({ headerTitle: "Group Page" })} />
        <Stack.Screen name="note" component={Note} options={() => ({ headerTitle: "New Note" })} />
        <Stack.Screen name="noteEdit" component={NoteEdit} options={() => ({ headerTitle: "Edit Note" })} />

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
  button: {
    alignItems: "center",
    backgroundColor: "white",
    paddingTop: 5,
    paddingBottom: 5,
    width: 45,
    borderRadius: 30
  },
  text: {
    color: "#2b2e4a",
    fontSize: 20
  },
});
