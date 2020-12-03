import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
    StyleSheet, Pressable,FlatList,
     Text, 
     View,
     ScrollView} from 'react-native';
import 'react-native-gesture-handler';
import Group from '../components/Group';
import Constants from "expo-constants";
import { Card, ListItem, Button, Icon } from 'react-native-elements'

const names = [
         {'name': 'Ben','desc':'this is group 1', 'id': 1 },
         {'name': 'Susan','desc':'this is group 2', 'id': 2},
         {'name': 'Robert','desc':'this is group 3', 'id': 3},
         {'name': 'Mary', 'desc':'this is group 4','id': 4},
         {'name': 'Daniel', 'desc':'this is group 5','id': 5},
         {'name': 'Laura','desc':'this is group 6', 'id': 6},
  ];

  function renderItem({ item }) {
  return <Text>{item}</Text>;
  }
export default function HomeScreen() {

    return(
        <View style={styles.container}>
            
            <ScrollView > 
               {
                names.map((item, index) => (
                    // <View key = {item.id} style = {styles.item}>
                    //     <Pressable >
                    //         <Text style={styles.text}>{item.name}</Text>
                    //     </Pressable>
                    // </View>
                    <Card key = {item.id} containerStyle={{marginBottom:-10 }}>
                        <Card.Title style={styles.title}>{item.name}</Card.Title>
                        <Card.Divider/>
                            <Text style={styles.text}>
                             {item.desc}
                            </Text>
                        <View style={{alignItems:'flex-end'}}>
                            <Button
                                buttonStyle={{margin:0 , borderRadius:100 , width:50 ,  backgroundColor:'#2b2e4a'}}
                                titleStyle={{ color:'white', fontSize:15}}
                                type="solid"
                                icon={{
                                    size: 15,
                                    color: "white",
                                    name:'chevron-right',
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
        margin: 5,
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