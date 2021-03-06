import React from 'react'
import { 
    View, 
    StyleSheet,
    Text,
    ImageBackground,
    ScrollView
} from 'react-native';
import FormOne from '../resetAdmin/FormOne';
import FormTwo from '../resetAdmin/FormTwo';
import ResetDelete from './ResetDelete';

import { useNavigation } from '@react-navigation/native';

import bg from '../assets/images/bg.png';

import Icon from 'react-native-vector-icons/Ionicons';

import {Left, Body, Button, Title } from 'native-base';


const ResetAdmin = () => {

     
    const navigation = useNavigation();

    const Back = ()=> { navigation.goBack()}


    return (
        <ScrollView style={styles.scrollView}>
        <ImageBackground  style={styles.image}>
            <View style={styles.container}>
                <View style={styles.header}>
                            <Left style={styles.leftPosition}>
                                <Button transparent>
                                    <Icon 
                                    name="arrow-back"
                                    color='white'
                                    size={25}
                                    onPress={(Back)}
                                    />
                                </Button>
                            </Left>
                            <Body>
                                <Title style={{fontSize:15}}>Modifier Mot de Passe</Title>
                                <Text style={styles.retour}>Retour</Text> 
                            </Body>
                    </View>
                    <View style={styles.footer}>
                        <Text style={styles.resetText}>Veuillez remplir le formulaire pour changer votre mot de passe.</Text>
                    <FormOne />
                    <FormTwo />
                    <ResetDelete />
                    </View>
            </View>
            </ImageBackground>
        </ScrollView>
       
        
    );
};


export default ResetAdmin;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
    },
    scrollView:{
        backgroundColor:'white',
      },
    header: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom:60,
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal:20,

    },
    resetText:{
        textAlign:'center',
        fontSize:20,
    },
    text:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
    },
    image: {
        flex: 1,
        backgroundColor:'orange'
    },
    retour:{
        position:'absolute', 
        color:'white', 
        top:10,
        right:160,
    },
    leftPosition:{
        position:'absolute', 
        left:20,
    },

    


});