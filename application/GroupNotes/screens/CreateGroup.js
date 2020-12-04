import React from 'react';
import { StyleSheet, Text ,  View,} from 'react-native';
import 'react-native-gesture-handler';
import {Button, Icon ,Header,Input } from 'react-native-elements'


export default function CreateGroup(){
    return(
        <View style={styles.container}>
            <View style={styles.form}>
                <Input
                    placeholder='Group Name'
                />
                <Input
                    placeholder='Group Id'
                />
                <Input
                    placeholder='Group Code'
                />
                <Button 
                    // onPress={()=> }
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