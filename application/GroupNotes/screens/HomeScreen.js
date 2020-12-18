import { StatusBar } from 'expo-status-bar';
import React, { useState ,useEffect} from 'react';
import {StyleSheet, Text,View, ScrollView} from 'react-native';
import 'react-native-gesture-handler';
import { Card, Button } from 'react-native-elements';
import firebase from '../firebase-connect/firebaseConf';



var database = firebase.database();
var db1= firebase.database().ref('notes/group1')

var test=''
db1.on('value', datasnap => {
    test =Object.values(datasnap.val())

});
          


const names = [
         {'name': 'Ben','desc':'this is group 1', 'id': 1 },
         {'name': 'Susan','desc':'this is group 2', 'id': 2},
         {'name': 'Robert','desc':'this is group 3', 'id': 3},
         {'name': 'Mary', 'desc':'this is group 4','id': 4},
         {'name': 'Daniel', 'desc':'this is group 5','id': 5},
         {'name': 'Laura','desc':'this is group 6', 'id': 6},
  ];


export default function HomeScreen({navigation}) {
    // const { groupId, groupCode } = route.params;
    // const [notesPlus , setNotePlus] = useState([]);
    // const [notNull , setNotNull] =useState(false)
    // const [count , setCount] =useState(0)

    // useEffect(() => {
    //     setCount(val=> val=val+1)
    //     console.log(count,'-------------------------------')
        
    //     const Notes = firebase.database()
    //     .ref(`/notes/${groupId}`)
    //     .on('value', snapshot => {
    //         const myData=snapshot.val();
            
    //         const array=[];
    //         if(myData!= null)
    //         {
    //             const keys = Object.keys(myData);
    //             Object.values(myData).map((item,index)=>{
    //                 if(keys!==null){
    //                     array.push({
    //                         id:keys[index],
    //                         text:item.noteText,
    //                         title:item.noteTitle,
    //                     })
    //                 }
    //             }
    //             )
    //             setNotePlus(array)
    //             setNotNull(true)
    //         }
    //         else{
    //             setNotNull(false)
    //         }
    //     },[]);
    //     return () => firebase.database()
    //         .ref(`/notes/${groupId}`)
    //         .off('child_added', Notes);
            

    // },[]);

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
                                onPress={()=> navigation.navigate('groupScreen')}
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