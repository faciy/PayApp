import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Card} from 'react-native-paper';
import { Header, Left, Body, Button, Icon, Title } from 'native-base';
import { useNavigation } from '@react-navigation/native';

const CourseEnAttente = () => {

    const Back = ()=> { navigation.goBack()}

    const navigation = useNavigation();

    return (
        <View>
                <Header style={styles.header}>
                      <Left>
                        <Button transparent>
                          <Icon 
                          name='close'
                          onPress={(Back)}
                          />
                        </Button>
                      </Left>
                      <Body>
                        <Title style={{left:40}}>Livraison</Title>
                      </Body>
                </Header>
            <View style={styles.cardOne}>
                <Card style={styles.card}>
                    <View>
                        <View style={styles.flexOne}>
                            <Text style={styles.code}>C-003</Text>
                            {/* <Text style={styles.date}>02 janvier 2019</Text> */}
                        </View>
                        <View style={styles.flexTwo}>
                            <Text style={{fontWeight:'bold'}}>Destination: </Text>
                            <Text style={{color:'grey'}}>Cocody Angré </Text>
                        </View>
                        <View style={styles.flexThree}>
                            <Text style={{fontWeight:'bold'}}>Marchandise: </Text>
                            <Text style={{color:'grey'}}>Riz 1kg </Text>
                        </View>
                        <View style={styles.flexThree}>
                            <Text style={{fontWeight:'bold'}}>Nombre de produit: </Text>
                            <Text style={{color:'grey'}}>1 </Text>
                        </View>
                        <View style={{marginTop:10}}>
                            <Text style={{fontWeight:'bold', textAlign:'center'}}>Prix: <Text style={{color:'white', fontSize:20, backgroundColor:'red'}}>1000 frs</Text></Text>
                        </View>
                    </View>
                </Card>
            </View>
            <View>
                <TouchableOpacity style={styles.button} onPress={() => {}}>
                    <Text style={styles.btnLogin}>Démarer la course</Text>
                </TouchableOpacity>
            </View>  
        </View>
    )
}

export default CourseEnAttente;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    flexTwo:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:20,
    },
    flexThree:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10,
    },
    code:{
        fontSize:20,
        color:'#0700C4',
        fontWeight:'bold',
        textAlign:'center',
        padding:5,
        marginEnd:120,
        marginStart:120,
        backgroundColor:'grey',
    },
    distance:{
        color:'grey',
    },
    //new //
    blocText:{
        alignItems:'center',
        marginTop:20,
    },
    date:{
        color:'grey',
    },
    somme:{
        color:'#0700C4',
        fontSize:20
    },
    fcfa:{
        color:'orange',
        fontSize:12,
    },
    card:{
        backgroundColor:'#fff',
        // marginTop:20,
        paddingVertical:21, 
        paddingHorizontal:10,
        marginHorizontal:5, 
        marginVertical:10,
        borderBottomWidth:2,
        borderRightWidth:2,
        borderRightColor:'grey',
        borderBottomColor:'grey'
       },
    cardOne:{
        marginTop:10,
    },
    cardTwo:{
        bottom:10,
    },
    heure:{
        fontWeight:'bold',
    },
   
    header:{
        backgroundColor:'orange'
    },
    button: {
        marginTop:20,
        alignItems: "center",
        padding: 17,
        justifyContent:'space-between',
        borderRadius:5,
        backgroundColor:'orange',
        marginStart:20,
        marginEnd:20,
      },
      btnLogin: {
        color:'white', 
        fontSize:15, 
        fontWeight:'bold',
      },

    
  });
