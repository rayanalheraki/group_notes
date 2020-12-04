import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import {  Button, Icon  } from 'react-native-elements'

export default function Note() {
    const [value, onChangeText] = React.useState('hello from note ');
    return(
        <View style={styles.container}>
            <Text style={styles.title} > Edit Your Note</Text>
            <View style={styles.textAreaContainer} >
                <TextInput
                    style={styles.textArea}
                    placeholder="Type something"
                    multiline={true}
                    numberOfLines={20}
                    onChangeText={text => onChangeText(text)}
                    value={value}
                    editable={true}
                />
            </View>
            <View style={styles.opir}>
                <Button
                    // onPress={()=>navigation.navigate('note')}
                    buttonStyle={{margin:5 , borderRadius:100 ,width:100,  backgroundColor:'#2b2e4a'}}
                    titleStyle={{ color:'white', fontSize:15}}
                    type="solid"
                    title=" delete"
                    icon={{
                        size: 15,
                        color: "white",
                        name:'trash-o',
                        type:'font-awesome',
                    }}
                />
                <Button
                    // onPress={()=>navigation.navigate('note')}
                    buttonStyle={{margin:5 , borderRadius:100 ,width:100,  backgroundColor:'#2b2e4a'}}
                    titleStyle={{ color:'white', fontSize:15}}
                    type="solid"
                    title=" update"
                    icon={{
                        size: 15,
                        color: "white",
                        name:'pencil',
                        type:'font-awesome',
                    }}
                />

            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#fff',
        padding:20,
        alignItems:'stretch'
    },
    list:{

    },
    textAreaContainer: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 5,
        marginBottom:10,
        
    },
    textArea: {
        height: 150,
        justifyContent: "flex-start",
        textAlignVertical:'top',
        padding:10,
    },
    title: {
        color: '#53354a',
        fontSize:20,
        margin:10,
        textAlign:'center'
    },
    opir:{
        flexDirection:'row-reverse',

    },

})