
import 'react-native-gesture-handler';
import {Button, Icon ,Header,Input } from 'react-native-elements';
import firebase from '../firebase-connect/firebaseConf';
import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert ,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';




export default function CreateGroup({navigation}){
    const [groupId , setGroupId] = useState(null);
    const [name , setName] = useState(null);
    const [code , setCode] = useState(null);

    const NewGroup =()=>{

        if(groupId === null || name===null || code===null)
        {
            Alert.alert('Error', 'Enter the data correctly');
        }
        else{
            
            firebase.database().ref(`groups/${groupId.toLowerCase()}`).set({
                GroupName: name,
                GroupCode: code,
            }, 
            // GotoGroup(groupId.toLowerCase(),code)
            (error) => {
              if (!error) {
                Alert.alert('Alert', 'Data saved successfully');
                navigation.navigate('groupScreen', {
                    groupId : groupId.toLowerCase(),
                    groupCode:code,
                });
                
              } else {
                Alert.alert('Alert', error);
              }
            }
            );
            
            
        }
    }


    return(
        <View style={styles.container}>
            <View style={styles.form}>
                <Input
                    placeholder='Group Name'
                    onChangeText={value => setName(value)}
                />
                <Input
                    placeholder='Group Id'
                    onChangeText={value => setGroupId(value)}
                />
                <Input
                    placeholder='Group Code'
                    onChangeText={value => setCode(value)}
                    // errorMessage="hihihi"
                />
                <Button 
                    onPress={NewGroup  }
                    buttonStyle={{
                        backgroundColor:'#2b2e4a',
                        margin:10,
                    }}
                    icon={{
                        size: 15,
                        color:"white",
                        name:'plus',
                        type:'font-awesome',
                    }}
                    title="Create New Group"
                />
            </View>
            
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
      },
    form:{
        marginTop:100,
        width:250,
    }
});



