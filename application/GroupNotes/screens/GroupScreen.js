import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
    StyleSheet, Pressable,FlatList,
     Text, 
     View,
     ScrollView} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'; 
import Group from '../components/Group';
import Constants from "expo-constants";
import { Card, ListItem, Button, Icon ,Header } from 'react-native-elements'

const names = [
         {'name': 'Ben','desc':'this is Note 1', 'id': 1 },
         {'name': 'Susan','desc':'this is Note 2', 'id': 2},
         {'name': 'Robert','desc':'this is Note 3', 'id': 3},
         {'name': 'Mary', 'desc':'this is Note 4','id': 4},
         {'name': 'Daniel', 'desc':'this is Note 5','id': 5},
         {'name': 'Laura','desc':'this is Note 6', 'id': 6},
  ];

  function renderItem({ item }) {
  return <Text>{item}</Text>;
  }


export default function GroupScreen({navigation}) {

    return(
        <View style={styles.container}>
            
            <Button
                    onPress={()=>navigation.navigate('joinGroup') }
                    buttonStyle={{
                        backgroundColor:'#2b2e4a',
                        marginTop:10,
                        marginLeft:12,
                        marginRight:12,
                        marginBottom:0,
                        height:70,
                    }}
                    icon={{
                        size: 15,
                        color: "white",
                        name:'sticky-note',
                        type:'font-awesome',
                    }}
                    title="Add New Note"
                />
            <ScrollView > 
               {
                names.map((item, index) => (
                    
                    <Card key = {item.id} containerStyle={{marginBottom:-10 }}>
                        
                        <Text style={styles.text}>
                            {item.desc}
                        </Text>
                        <View style={{alignItems:'flex-end'}}>
                            
                            <Button
                                onPress={()=>navigation.navigate('note')}
                                buttonStyle={{margin:0 , borderRadius:100 , width:50 ,  backgroundColor:'#2b2e4a'}}
                                titleStyle={{ color:'white', fontSize:15}}
                                type="solid"
                                icon={{
                                    size: 15,
                                    color: "white",
                                    name:'pencil',
                                    type:'font-awesome',
                                }}
                            />
                        </View>
                        
                    </Card>
                ))
               }
            </ScrollView>

            {/* <View
                style={styles.group}
                onPress={() => alert('This is a button!')}
                >
                <Text style={styles.text}>
                    helllo from HomeScreen
                    
                </Text>
            </View> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
    },
    list:{

    },
    group:{
        margin: 5,
        backgroundColor:'#a6e3e9',
        height:150,
        textAlign:'center',
    },
    text: {
        marginBottom: 10,
        
    },
    title: {
        color: '#e84545',
        fontSize:20,
        margin:-5,
        textAlign:'left'
    },
    item: {
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        margin: 2,
        backgroundColor: '#cbf1f5'
     },
})