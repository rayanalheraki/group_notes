
import 'react-native-gesture-handler';
import {Button,Input} from 'react-native-elements';
import firebase from '../firebase-connect/firebaseConf';
import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, View, Alert ,Text} from 'react-native';
import NetInfo from "@react-native-community/netinfo";

import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('groupNotes.db');


export default function CreateGroup({navigation}){
    const [groupId , setGroupId] = useState(null);
    const [name , setName] = useState(null);
    const [code , setCode] = useState(null);
    

    const NewGroup =  ()=>{
        NetInfo.fetch().then(state => {
            if(state.isConnected){
                if(groupId === null || name===null || code===null )
                {
                    Alert.alert('Error', 'Enter the data correctly');
                }
                else{
                var checkNull=true;
                 firebase.database()
                    .ref(`groups/${groupId.toLowerCase()}`)
                    .once("value",snapshot => {
                        if(snapshot.val() != null)
                        {
                            checkNull=false;
                        }
                        
                        
                    });
                
                if(checkNull == false){
                    Alert.alert('Error', 'This id is used');
                }
                else{
                    
                    firebase.database().ref(`groups/${groupId.toLowerCase()}`).set({
                        GroupName: name,
                        GroupCode: code,
                    }, 
                    (error) => {
                    if (!error) {
                        NetInfo.fetch().then(state => {
                            if(state.isConnected){
                            Alert.alert('Alert', 'your Group is created');
                            navigation.navigate('groupScreen', {
                                groupId : groupId.toLowerCase(),
                                groupCode:code,
                            })
                            db.transaction(tx=>{
                                tx.executeSql("insert into GroupNotes (GroupId , groupCode , groupName) values (?,?,?)", [groupId.toLowerCase() ,code,name]);
            
                            },
                            null,
                            console.log("done")
                            );
                        }
                        else{
                            
                        }

                        });
                        
                        
                    } else {
                        Alert.alert('Alert', 'Error');
                    }
                    }
                    ); 
                }}
            }else{
                Alert.alert('Alert', 'Sorry no internet');
            }
        })
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
                    //errorMessage=
                />
                <Button 
                    onPress={NewGroup }
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



