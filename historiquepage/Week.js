import React from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Card} from 'react-native-paper';

const Week = () =>{
    return(
    <ScrollView>

        <View style={styles.container}>
            <View style={styles.blocText}>
                    <Text style={styles.somme}>
                    TOTAL: 253400
                    <Text style={styles.fcfa}>Fcfa</Text>
                    </Text>
            </View>
            <View style={styles.cardOne}>
                <Card style={styles.card}>
                    <View>
                        <View style={styles.flexOne}>
                            <Text style={styles.code}>C-003</Text>
                            <Text style={styles.date}>02 janvier 2019</Text>
                        </View>
                        <View style={styles.flexTwo}>
                            <Text >Cocody Angré</Text>
                            <AntDesign 
                            style={styles.userIcon} 
                            name="checkcircle"
                            color="green"
                            size={15}
                            />
                        </View>
                            <Text style={styles.heure}>08:25 - 10:25</Text>
                    </View>
                    <View>
                        <Text style={styles.details}>----------------------------     Détails     -----------------------------</Text>
                        <View>
                            <View style={styles.flexThree}>
                                <View>
                                    <Text style={styles.distance}>Distance</Text>
                                    <Text style={styles.six}>6h10mn</Text>
                                    <View style={styles.trait}></View>
                                    <Text style={styles.km}>2Km</Text>
                                </View>
                                <View>
                                    <Text style={styles.prix}>Prix</Text>
                                    <Text>1500 Fcfa</Text>
                                </View>
                                <View>
                                    <Text style={styles.course}>Course</Text>
                                    <Text style={styles.quinze}>15</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.livreurView}>
                            <Text style={styles.name}>Nom et prénoms du livreur</Text>
                        </View>
                    </View>
                </Card>
            </View> 
            <View style={styles.cardTwo}>
                <Card style={styles.card}>
                    <View>
                        <View style={styles.flexOne}>
                            <Text style={styles.code}>C-004</Text>
                            <Text style={styles.date}>02 janvier 2019</Text>
                        </View>
                        <View style={styles.flexTwo}>
                            <Text >Cocody Angré</Text>
                            <AntDesign 
                            style={styles.userIcon} 
                            name="checkcircle"
                            color="green"
                            size={15}
                            />
                        </View>
                            <Text style={styles.heure}>08:25 - 10:25</Text>
                    </View>
                    <View>
                        <Text style={styles.details}>----------------------------     Détails     -----------------------------</Text>
                        <View>
                            <View style={styles.flexThree}>
                                <View>
                                    <Text style={styles.distance}>Distance</Text>
                                    <Text style={styles.six}>6h10mn</Text>
                                    <View style={styles.trait}></View>
                                    <Text style={styles.km}>2Km</Text>
                                </View>
                                <View>
                                    <Text style={styles.prix}>Prix</Text>
                                    <Text>1500 Fcfa</Text>
                                </View>
                                <View>
                                    <Text style={styles.course}>Course</Text>
                                    <Text style={styles.quinze}>15</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.livreurViewNew}>
                            <Text style={styles.name}>Nom et prénoms du livreur</Text>
                        </View>
                    </View>
                </Card>
            </View> 
            
            
        </View>
    </ScrollView>
    )
}

export default Week;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    flexOne:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    flexTwo:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    flexThree:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    livreurView:{
        padding:5,
        backgroundColor:'orange',
        marginTop:15,
    },
    livreurViewNew:{
        padding:5,
        backgroundColor:'green',
        marginTop:15,
    },
    name:{
        textAlign:'center',
        color:'white',
        fontSize:15
    },

    code:{
        fontSize:15,
        color:'#0700C4',
        fontWeight:'bold'
    },
    quinze:{
        textAlign:'center'
    },
    prix:{
        color:'grey',
        textAlign:'center'
    },
    distance:{
        color:'grey',
    },
    course:{
        color:'grey',
    },
    details:{
        color:'orange', 
        textAlign:'center', 
        fontWeight:'bold'
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
        color:'grey'
    },
    trait:{
        borderBottomWidth:2,
        borderBottomColor:'black',
    },
    six:{
        color:'black'
    },
    km:{
        textAlign:'center',
        color:'black'
    },

    
  });
