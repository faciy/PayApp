import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { IconButton, Icon } from 'react-native-paper';
import { DrawerActions } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'



const MyTabBar = ({ navigation ,  navigation: { navigate  } }) => {


        return (
            <View style={styles.container}>
               <View style={styles.chat}>
                     <TouchableOpacity style={styles.userIconChat}  onPress={() => navigate('Chat')}>
                        <MaterialCommunityIcons  
                            name="chat"
                            color="grey"
                            size={25}
                        />
                    </TouchableOpacity>
                    <Text style={styles.alignChat}>Chat</Text>
               </View>
               <View style={styles.history}>
                    <TouchableOpacity style={styles.userIconHist} onPress={() => navigate('Historique')}>
                        <MaterialCommunityIcons  
                            name="credit-card"
                            color="grey"
                            size={25}
                        />
                    </TouchableOpacity>
                    <Text style={styles.alignHist}>Historiques</Text>
               </View>
        <View style={styles.accueil}>
               <View style={[styles.button, styles.actionBtn]}>
                    <IconButton
                    icon="home"
                    style={styles.IconHome} 
                    color="white"
                    size={50}
                    onPress={() => navigation.reset({
                        index: 0,
                        routes: [{ name: 'ShoppingPage' }],
                      })}
                    />
                    <Text style={{top:10, color:'green'}}>Accueil</Text>
               </View>
        </View>
               <View style={styles.Notification}>
                    <TouchableOpacity style={styles.userIconNotif}onPress={() => navigate('Notification')}>
                            <Ionicons  
                            name="notifications"
                            color="grey"
                            size={25}
                    />
                    </TouchableOpacity>
                    <Text style={styles.alignNotif}>Notification</Text>
               </View>
               <View style={styles.Plus}>
                    <TouchableOpacity style={styles.userIconPlus} onPress={() => {navigation.dispatch(DrawerActions.openDrawer());}}>
                        <Ionicons  
                            name="menu"
                            color="grey"
                            size={25}
                        />
                    </TouchableOpacity>
                    <Text style={styles.alignPlus}>Plus</Text>
               </View>
            </View>
        )
}
 export default MyTabBar;

 const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderTopWidth:2,
        borderTopColor:'#B1B1B1',
        backgroundColor:'white', 
    },
    align:{
        textAlign:'center',
        bottom:10
    },
    alignNotif:{
        top:12,
    },
    alignHist:{
        top:12,
    },
    alignChat:{
        top:12,
    },
    alignPlus:{
        top:12,
    },
    accueil:{
            position:'relative',
            bottom: 35,
            // zIndex: 10,
    },
    button: {
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'grey',
        shadowOpacity: 0.1,
        shadowOffset: { x: 2, y: 0 },
        shadowRadius: 2,
        borderRadius: 30,
        shadowOpacity: 5.0,

    },
    userIconNotif:{
        top:10,
        marginStart:23,
    },
    userIconHist:{
        top:10,
        marginStart:23,
    },
    userIconChat:{
        top:10,
    },
    userIconPlus:{
        top:10,
    },
    actionBtn: {

        backgroundColor: 'green',
        textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 10,
        borderWidth: 3,
        borderColor: 'grey'
    },
    IconHome:{
        top:5
    }
   
    
  });
