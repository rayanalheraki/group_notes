import React from 'react';
import { StyleSheet, Text ,  View,} from 'react-native';
import 'react-native-gesture-handler';
import { Card, ListItem, Button, Icon ,Header } from 'react-native-elements'

export default function GroupOp ({ navigation }){
    return(
        <View style={styles.container}>
            <Button 
                onPress={()=>navigation.navigate('createGroup') }
                buttonStyle={{
                    backgroundColor:'#2b2e4a',
                    margin:10,
                    height:70,
                    width:200,
                }}
                icon={{
                    size: 15,
                    color:"white",
                    name:'plus',
                    type:'font-awesome',
                }}
                title="Create New Group"
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
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
});