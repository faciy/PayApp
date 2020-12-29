import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import user from '../assets/images/user.png'
import game from '../assets/images/game.png'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'



import {
    Avatar,
    Caption,
    Drawer,
    Text,
} from 'react-native-paper';

import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
  } from '@react-navigation/drawer';

const DrawerContent = (props) => {

      return(
        <ImageBackground source={game} style={styles.ImgBackground}>
        <View style={styles.container}>
        <DrawerContentScrollView  {...props}>
            <View style={styles.drawerContent}>
                <View style={styles.userInfoSection }>
                    <View style={{marginTop:20}}>
                        <Avatar.Image 
                            source={user}
                            size={80}
                        />
                    </View>
                    <View style={{marginTop:10}}>
                        <Text style={styles.title}>CHARLES OTH-NIEL</Text>
                        <Caption style={styles.caption}>SALARIE</Caption>
                    </View>

                </View>

                <Drawer.Section style={styles.drawerSection}>
          
                    <DrawerItem 
                        icon={({ size}) => (
                            <Icon 
                            name="account-outline" 
                            color='black'
                            size={size}
                            />
                        )}
                        
                      label={() => <Text style={{ color: 'black' }}>Mon Profil</Text>}
                        onPress={() => {props.navigation.navigate('Profil')}}
                    />
                    <DrawerItem 
                        icon={({size}) => (
                            <Icon 
                            name="bookmark-outline" 
                            color='black'
                            size={size}
                            />
                        )}
                       
                      label={() => <Text style={{ color: 'black' }}>A Propos</Text>}
                        onPress={() => {props.navigation.navigate('About')}}
                    />
                    <DrawerItem 
                        icon={({size}) => (
                            <Icon 
                            name="phone" 
                            color='black'
                            size={size}
                            />
                        )}
                      label={() => <Text style={{ color: 'black' }}>Nous Contacter</Text>}
                        onPress={() => {props.navigation.navigate('ContacterPage')}}
                    />
                    <DrawerItem 
                        icon={({size}) => (
                            <Icon 
                            name="head-question" 
                            color='black'
                            size={size}
                            />
                        )}
                        
                      label={() => <Text style={{ color: 'black' }}>Aide</Text>}
                        onPress={() => {props.navigation.navigate('Aide')}}
                    />
                    <DrawerItem
                    label={() => <Text style={{ color: 'black' }}>Se déconnecter</Text>}
                    onPress={() => {props.navigation.navigate('Login')}}
                    />
                  
                    </Drawer.Section> 
            </View>
        </DrawerContentScrollView>
    </View>
    </ImageBackground>
  );
}

  export default DrawerContent;

  const styles = StyleSheet.create({
    container:{
      flex:1,
    },
    userInfoSection: {
      alignItems:'center', 
    },
    title: {
      fontSize: 20,
      marginTop: 3,
      color:'grey',
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      textAlign:'center',
      color:'green'
    },
    drawerSection: {
      marginTop: 50,
    },
    ImgBackground:{
      flex:1,
        }
  });