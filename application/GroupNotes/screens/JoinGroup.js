import React from 'react';
import { StyleSheet, Text ,  View,} from 'react-native';
import 'react-native-gesture-handler';
import {Button, Icon ,Header,Input } from 'react-native-elements'


export default function JoinGroup(){
    return(
        <View style={styles.container}>
            <View style={styles.form}>

                <Input
                    placeholder='Group Id'
                />
                <Input
                    placeholder='Group Code'
                />
                <Button
                    onPress={()=>navigation.navigate('joinGroup') }
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