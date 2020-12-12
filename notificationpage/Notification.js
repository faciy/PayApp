import React from 'react'
import { 
    View, 
    StyleSheet,
    Text,
    FlatList,
    ImageBackground
} from 'react-native';
import { Card} from 'react-native-paper';


import Icon from 'react-native-vector-icons/Ionicons';

import {Left, Body, Button, Title } from 'native-base';
// import { useNavigation } from '@react-navigation/native';


const Notification = () => {


    // const navigation = useNavigation();

    // const Back = ()=> { navigation.goBack()}


const data = [
    {id:1, one:'Course affectée:',
    two:'Départ:',
    three:'CHU d\'Angré',
    four:'Arrivée:',
    five:'YOPOUGON',
    six:'ANANERAIRE',
    seven:'10',
    eight:'Septembre',
    nine:'2020 09:36'
    },
    {id:2, one:'Course affectée:',
    two:'Départ:',
    three:'Cocovico',
    four:'Arrivée:',
    five:'Cocody 2 plateaux',
    six:'8 ème Tranche',
    seven:'10',
    eight:'Septembre',
    nine:'2020 09:36'
    },
    {id:3, one:'Course affectée:',
    two:'Départ:',
    three:'Macory Residentiel',
    four:'Arrivée:',
    five:'Cocovico',
    seven:'10',
    eight:'Septembre',
    nine:'2020 09:36'
    },
    {id:4, one:'Course affectée:',
    two:'Départ:',
    three:'Macory',
    four:'Arrivée:',
    five:'Angré 8 ème Tranche',
    seven:'10',
    eight:'Septembre',
    nine:'2020 09:36'
    },
    {id:5, one:'Course affectée:',
    two:'Départ:',
    three:'Macory',
    four:'Arrivée:',
    five:'Angré 8 ème Tranche',
    seven:'10',
    eight:'Septembre',
    nine:'2020 09:36'
    },
    {id:6, one:'Course affectée:',
    two:'Départ:',
    three:'Macory',
    four:'Arrivée:',
    five:'Angré 8 ème Tranche',
    seven:'10',
    eight:'Septembre',
    nine:'2020 09:36'
    },
    {id:7, one:'Course affectée:',
    two:'Départ:',
    three:'Macory',
    four:'Arrivée:',
    five:'Angré 8 ème Tranche',
    seven:'10',
    eight:'Septembre',
    nine:'2020 09:36'
    },
    {id:8, one:'Course affectée:',
    two:'Départ:',
    three:'Macory',
    four:'Arrivée:',
    five:'Angré 8 ème Tranche',
    seven:'10',
    eight:'Septembre',
    nine:'2020 09:36'
    },

]


    const renderList = ((item) =>{
        return(
            <View>
                 <Card style={styles.card}>
                    <View>
                        <View style={styles.blocOne} >
                            <View >
                                <Text style={styles.course}>{item.id}-{item.one}</Text>
                                <Text><Text style={styles.gras}>{item.two}</Text> {item.three}</Text>
                                <Text><Text style={styles.gras}>{item.four}</Text> {item.five}</Text>
                                <Text>{item.six}</Text>
                            </View>
                            <View style={styles.date}>
                                <Text style={styles.grey}>{item.seven}</Text>
                                <Text style={styles.grey}>{item.eight}</Text>
                                <Text style={styles.grey}>{item.nine}</Text>
                            </View> 
                        </View>
                    </View>
                </Card>
            </View>
        )
    });

    return (
        
        <ImageBackground style={styles.image}>
            <View style={styles.container}> 

                <View style={styles.header}>
                <Left style={styles.leftPosition}>
                    <Button transparent>
                        <Icon 
                         name="arrow-back"
                         color='white'
                         size={25}
                         onPress={() => {}}
                        />
                    </Button>
                </Left>
                <Body>
                <Title>Notification</Title>
                <Text style={styles.retour}>Retour</Text> 
                </Body>
                </View>
                <View style={styles.footer}>
                <FlatList  
                data={data}
                renderItem= {({item}) => {
                return renderList(item)
                }}
                keyExtractor={item => `${item.id}`}

                />

                </View>
                
            </View>
                </ImageBackground>
        
    );
};


export default Notification;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
      },
        header: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom:-550
        },
        footer: {
        flex:1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal:20,
            
        },
        text:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
        },
        blocOne:{
            flexDirection:'row', 
            justifyContent:'space-between',
            marginVertical:6
        },
        border:{
            borderBottomWidth:2,
            borderBottomColor:'#ECECEC',
        },
        date:{
            alignItems:'center',
        },
        course:{
            color:'green'
        },
        gras:{
            fontWeight:'bold'
        },
        grey:{
            color:'grey'
        },
        image: {
            flex: 1,
            backgroundColor:'orange'
          },
          retour:{
            position:'absolute', 
            color:'white', 
            top:10,
            left:-75,
        },
        leftPosition:{
            position:'absolute', 
            left:20,
        },
        card:{
            backgroundColor:'#fff',
            marginTop:10,
            paddingHorizontal:10,
            borderBottomWidth:2,
            borderRightWidth:2,
            borderLeftWidth:1,
            borderTopWidth:1,
            borderTopColor:'orange',
            borderLeftColor:'green',
            borderRightColor:'grey',
            borderBottomColor:'grey'
           },
        
        

});