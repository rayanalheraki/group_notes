import React, { useState } from 'react';
import { StyleSheet ,  View,Alert} from 'react-native';
import 'react-native-gesture-handler';
import {Button,Input } from 'react-native-elements'
import firebase from '../firebase-connect/firebaseConf';
import NetInfo from "@react-native-community/netinfo";

import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('groupNotes.db');



export default function JoinGroup({ navigation}){
    const [groupId , setGroupId] = useState(null);
    const [code , setCode] = useState(null);
    //const [groupName ,setGroupName] =useState('')
    const [item ,setItem] =useState(null)
    const [forceUpdate,forceUpdateId]= useForceUpdate()

    const GoToGroup=  ()=>{
        NetInfo.fetch().then(state => {
            if(state.isConnected){
                if(groupId=== null || code===null){
                    Alert.alert('Sorry', 'Please enter the data correctly');
                }else{
                    firebase.database()
                        .ref(`/groups/${groupId.toLowerCase()}/GroupCode`)
                        .on('value', snapshot => {
                            if(snapshot.val()=== null){
                                Alert.alert('Sorry', 'This ID is not used');
                            }else if(snapshot.val()==code)
                            {   
                                NetInfo.fetch().then(state => {
                                    if(state.isConnected){
                                firebase.database()
                                .ref(`/groups/${groupId.toLowerCase()}/GroupName`)
                                .once('value', snapshot => {
                                    console.log('from froup name',snapshot.val())
                                    db.transaction(tx=>{
                                        tx.executeSql("insert into GroupNotes (GroupId , groupCode , groupName) values (?,?,?)", [groupId.toLowerCase() ,code, snapshot.val()]);
                                    },
                                    null,
                                    console.log("done"),
                                    (error)=>{
                                        console.log(error)
                                    }

                                    );
                                })
                                navigation.navigate('groupScreen', {
                                    groupId : groupId.toLowerCase(),
                                    groupCode:code,
                                })
                            }})
                            }else if(snapshot.val()!==code){
                                Alert.alert('Sorry', 'Wrong code');
                            }
                        })
                }
            }else
            {
                Alert.alert('Alert', 'Sorry no internet');

            }       
        })
    }
    const add= ()=>{
        const Notes = firebase.database()
        .ref(`/groups/${groupId}/groupName`)
        .on('value', snapshot => {
            console.log(snapshot.val())
            setGroupName(snapshot.val())
        })
    }

    return(
        <View style={styles.container}>
            <View style={styles.form}>

                <Input
                    placeholder='Group Id'
                    onChangeText={value => setGroupId(value)}
                />
                <Input
                    placeholder='Group Code'
                    onChangeText={value => setCode(value)}

                />
                <Button
                    onPress={GoToGroup }

                    buttonStyle={{
                        backgroundColor:'#2b2e4a',
                        margin:10,
                        height:70,
                        width:200,
                    }}
                    icon={{
                        size: 15,
                        color: "white",
                        name:'sign-in',
                        type:'font-awesome',
                    }}
                    title="Join To Group"
                />
            </View>
            
        </View>
    );
}

function useForceUpdate() {
    const [value , setValue]=useState(0);
    return [()=>setValue(value+1),value];
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