
import 'react-native-gesture-handler';
import {Button,Input ,Icon} from 'react-native-elements';
import firebase from '../firebase-connect/firebaseConf';
import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, View, Alert ,Text} from 'react-native';




export default function CreateGroup({navigation}){
    const [groupId , setGroupId] = useState(null);
    const [name , setName] = useState(null);
    const [code , setCode] = useState(null);
    const [wrongName, setWrongName] =useState('');

    // firebase.database().ref("groups/").equalTo(groupId).once("value",snapshot => {
    //     if (snapshot.exists()){
    //       const userData = snapshot.val();
    //       console.log("---------------exists!", userData); 
    //     }
    // });

    const NewGroup = async ()=>{
        if(groupId === null || name===null || code===null )
        {
            Alert.alert('Error', 'Enter the data correctly');
        }
        else{
        var checkNull=true;
        await firebase.database()
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
                  
                Alert.alert('Alert', 'your Group is created');
                navigation.navigate('groupScreen', {
                    groupId : groupId.toLowerCase(),
                    groupCode:code,
                })
                
              } else {
                Alert.alert('Alert', 'yanlis var');
              }
            }
            ); 
        }}
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



