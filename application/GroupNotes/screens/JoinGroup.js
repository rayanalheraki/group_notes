import React, { useState } from 'react';
import { StyleSheet ,  View,Alert} from 'react-native';
import 'react-native-gesture-handler';
import {Button,Input } from 'react-native-elements'
import firebase from '../firebase-connect/firebaseConf';




export default function JoinGroup({ navigation}){
    const [groupId , setGroupId] = useState(null);
    const [code , setCode] = useState(null);

    const GoToGroup= ()=>{
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
                        navigation.navigate('groupScreen', {
                            groupId : groupId.toLowerCase(),
                            groupCode:code,
                        })
                    }else if(snapshot.val()!==code){
                        Alert.alert('Sorry', 'Wrong code');
                    }
                })
        }
        
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