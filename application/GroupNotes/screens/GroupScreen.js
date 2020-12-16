import { StatusBar } from 'expo-status-bar';
import React,{ useState,useEffect} from 'react';
import { 
    StyleSheet, Pressable,FlatList,
     Text, 
     View,
     ScrollView} from 'react-native';
import 'react-native-gesture-handler';
import { Card, ListItem, Button, Icon ,Header } from 'react-native-elements';
import firebase from '../firebase-connect/firebaseConf';




export default function GroupScreen({route , navigation}) {
    const { groupId, groupCode } = route.params;
    const [notes, setNotes] = useState([]);
    //const [notNull, setNotNull] = useState(false);
    const [notesPlus , setNotePlus] = useState([]);
   // const [keys , setKeys]= useState(null);
    const [render, setRender] = useState(0);

    useEffect(() => {
        
        const Notes = firebase.database()
        .ref(`/notes/${groupId}`)
        .on('value', snapshot => {
            const myData=snapshot.val();
            const keys = Object.keys(myData);
            const array=[];
            if(myData!= null)
            {
                //console.log("my data : "+myData )
               // setKeys(Object.keys(myData))
                Object.values(myData).map((item,index)=>{
                    
                    if(keys!==null){
                        console.log(item, index)
                        array.push({
                            id:keys[index],
                            text:item.noteText,
                            title:item.noteTitle,
                        })
                        //console.log(array)

                    }
                }
                )
                
                setNotePlus(array)
                //console.log("array  : "+ JSON.stringify(array));
                //console.log("keys : "+Object.keys(myData).forEach(data=>array.push(myData[data])  ));
                
                setNotes( Object.values(myData) );
                
            }
        });
        return () =>
        firebase.database()
            .ref(`/notes/${groupId}`)
            .off('child_added', Notes);

    },[]);

      console.log(notesPlus)
      console.log("notes :");
    return(
        <View style={styles.container}>
            
            <Button
                    onPress={()=>navigation.navigate('note',{
                        groupId:groupId,
                    }) }    
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
                    title="  Add New Note  "
                />
            <ScrollView > 
               
               {
                notesPlus.map((item, index) => (
                     
                    <Card key = {index} containerStyle={{marginBottom:-10 }}>
                        
                        <Card.Title style={{textAlign:'left'}}> {item.title}</Card.Title>
                        <Card.Divider/>

                        <Text style={styles.text}>
                            {item.noteText}
                        </Text>
                        <View style={{alignItems:'flex-end'}}>
                            
                            <Button
                                onPress={()=>navigation.navigate('noteEdit',{
                                    groupId:groupId,
                                    noteId:item.id,
                                })}
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