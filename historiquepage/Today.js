import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Card} from 'react-native-paper';

// import red from '../assets/images/Rectangle_red.png'
// import green from '../assets/images/Rectangle_green.png'

const Today = () =>{
    return(
        <View style={styles.container}>
            <View style={styles.blocText}>
                {/* <Text style={styles.date}>Lun 25 Avril 2019</Text> */}
                <Text style={styles.somme}>
                TOTAL: 154500
                <Text style={styles.fcfa}>Fcfa</Text>
                </Text>
            </View>
            <View style={styles.bloc}>
                <View style={styles.blocFirst}>
                    <View style={styles.blocOne}>
                        <Text style={styles.quinze}>15</Text>
                        <Text style={styles.text}>Courses</Text>
                    </View>
                    <View style={styles.blocTwo}>
                        <Text style={styles.quinze}>08:30 - 18:30</Text>
                        <Text style={styles.text}>Tranche Horaire</Text>
                    </View>
                    <View style={styles.blocThree}>
                        <Text style={styles.quinze}>2200 fcfa</Text>
                        <Text style={styles.text}>Dernière course</Text>
                    </View>
                </View>
            </View>
            <View style={styles.cardOne}>
                <Card style={styles.card}>
                    <View>
                        <View style={styles.flexOne}>
                            <Text >C-003</Text>
                            <Text>02 janvier 2019</Text>
                        </View>
                        <View style={styles.flexTwo}>
                            <Text >Cocody Angré</Text>
                            <Text>Livré</Text>
                        </View>
                            <Text>08:25 - 10:25</Text>
                    </View>
                    <View>
                        <Text style={{color:'orange', textAlign:'center'}}>---------------------------      informations     ---------------------------</Text>
                        <View>
                            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                                <Text>Distance</Text>
                                <Text>Prix</Text>
                                <Text>course</Text>
                            </View>

                        </View>
                    </View>
                </Card>
            </View> 
            <View style={styles.cardTwo}>
                <Card style={styles.card}>
                    <View style={styles.contenuOne}>
                       <Text style={styles.ctrois}>C-003</Text>
                       <Text style={styles.heure}>08:25</Text>
                       <Text style={styles.heureOne}>10:25</Text>
                   </View>
                   <View style={styles.contenuTwo}>
                       <Text style={styles.lieu}>Cocody angré</Text>
                       <Text style={styles.prix}>1500 Fcfa</Text>
                       
                   </View>
                   <View style={styles.contenuThree}>
                       <Text style={styles.name}>Nom et prénoms du livreur</Text>
                   </View>
                </Card>
            </View>
            
            
        </View>
    )
}

export default Today;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop:3,
    },
    // new //
    flexOne:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    flexTwo:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    //new //
    blocText:{
        alignItems:'center'
    },
    date:{
        color:'grey',
        fontSize:20
    },
    somme:{
        color:'#0700C4',
        fontSize:20
    },
    fcfa:{
        color:'orange',
        fontSize:12,
    },
    blocFirst:{
        flex: 1, 
        flexDirection: 'row',
        marginTop:20, 
        justifyContent:'center'
    },
    blocOne:{
        borderBottomWidth:2,
        borderTopWidth:2,
        borderRightWidth:2,
        borderLeftWidth:2,
        borderBottomColor:'#CACACA',
        borderTopColor:'#CACACA',
        borderRightColor:'#CACACA',
        borderLeftColor:'#CACACA',
        width: 90, 
        height: 90,
        justifyContent:'center'
    },
    blocTwo:{
        borderBottomWidth:2,
        borderTopWidth:2,
        borderRightWidth:2,
        borderBottomColor:'#CACACA',
        borderTopColor:'#CACACA',
        borderRightColor:'#CACACA',
        width: 130, 
        height: 90,
        justifyContent:'center'
    },
    blocThree:{
        borderBottomWidth:2,
        borderTopWidth:2,
        borderRightWidth:2,
        borderBottomColor:'#CACACA',
        borderTopColor:'#CACACA',
        borderRightColor:'#CACACA',
        width: 130, 
        height: 90,
        justifyContent:'center'
    },
    quinze:{
        textAlign:'center'
    },
    text:{
        textAlign:'center',
        top:10
    },
    card:{
        backgroundColor:'#fff',
        marginTop:20,
        paddingVertical:21, 
        marginHorizontal:5, 
        marginVertical:10,
        borderBottomWidth:1.5,
        borderRightWidth:1.5,
        borderRightColor:'grey',
        borderBottomColor:'grey'
       },
    cardOne:{
        marginTop:80,
    },
    cardTwo:{
        bottom:10,
    },
    contenuTwo:{
        flexDirection:'row', 
        justifyContent:'space-between',
        marginStart:90,
        bottom:50
    },
    contenuOne:{
        position:'relative',
        flexDirection:'row', 
        justifyContent:'space-between',
    },
    name:{
        marginStart:90,
        color:'grey',
        fontSize:15
    },
    heure:{
        marginEnd:145,
        fontSize:20
    },
    heureOne:{
        fontSize:20
    },
    fraction:{
        position:'absolute',
        // marginStart:10,
        marginTop:20,
       
    },
    userTrait:{
        position:'relative',
        maxHeight:40,
        top:-44  
    },
    trait:{
        borderBottomWidth:2,
        borderBottomColor:'#B1B1B1',
    },
    six:{
        fontSize:12,
        color:'grey'
    },
    km:{
        fontSize:12,
        textAlign:'center',
        color:'grey'
    },
    lieu:{
        color:'grey',
        fontSize:15
    },
    ctrois:{
        color:'grey',
        fontSize:20,
        marginLeft:20
    },
    prix:{
        color:'#0700C4',
        fontSize:15
    },
    userTop:{
        position:'absolute',
        transform: [{ rotate: "180deg" }],
        top:-61,
        left:-32,
    },
    userTopOne:{
        position:'absolute',
        transform: [{ rotate: "180deg" }],
        top:-61,
        left:-32,
    }

    
  });
