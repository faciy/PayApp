import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
    ActivityIndicator
} from 'react-native';
import * as firebase from 'firebase';
import { Container, Header, Form, Input, Item, Button, Label } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import delivery from '../assets/images/food-delivery.png'


const firebaseConfig = {
    apiKey: "AIzaSyCqkqjOgHBODPLYf-ZhQ7RcSZoK9C1Chro",
    authDomain: "payauth-ab60f.firebaseapp.com",
    projectId: "payauth-ab60f",
    storageBucket: "payauth-ab60f.appspot.com",
    messagingSenderId: "271742196676",
    appId: "1:271742196676:web:012d3a7b9a21e5330f6291"
  };
  // Initialize Firebase
  if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
  }

const Login = () => {

    const navigation = useNavigation();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signUp = (email, password) => {
        console.log('password', password)
        try {
            if(password.length<5){
                alert('Entrer 5 caractères svp')
                return;
            }
            
            // alert(email)
            firebase.auth().createUserWithEmailAndPassword(email, password)
            setEmail('')
            setPassword('')
        } catch (error) {
            console.log(error.toString())
        }
    }

    const login = (email, password) => {
        try {
            if(email.length<5){
                alert('Entrer 5 caractères svp')
                return;
            }
            
            firebase.auth().signInWithEmailAndPassword(email, password)
            .then((users) => {
                console.log(users.user)
                // setLoading(true)
                navigation.navigate("ShoppingPage")
                
            })
        } catch (error) {
            alert('inscrivez vous')
        }
    }

    return(
        <Container style={styles.container}>
            <Form>
           <View style={{paddingLeft:10}}>
               <TextInput 
                onChangeText={(email) => setEmail(email)}
                placeholder="Email"
                autoCorrect={false}
                autoCapitalize='none'
               />
               <View style={{borderBottomColor:'black',borderBottomWidth:1}}></View>
           </View>
            <View style={{paddingLeft:10}}>
               <TextInput 
                onChangeText={(password) => setPassword(password)}
                placeholder="Password"
                secureTextEntry={true}
                autoCorrect={false}
                autoCapitalize='none'
               />
               <View style={{borderBottomColor:'black',borderBottomWidth:1}}></View>
           </View>
                <Button 
                onPress={() => login(email, password)}
                style={{marginTop:40}}
                full rounded success>
                    <Text style={{color:'white'}}>Login</Text>
                </Button>

                <Button 
                onPress={() => signUp(email, password)}
                style={{marginTop:10}}
                full rounded warning>
                    <Text style={{color:'white'}}>Sign Up</Text>
                </Button>
            </Form>
            <View style={styles.logo}>
                    <Image
                        style={styles.logoPay}
                        source={delivery}
                    />
                </View>
        </Container> 
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        justifyContent:'center',
        padding:10
    },
    logo: {
        paddingVertical: 20,
        paddingHorizontal: 25,
        alignItems: 'center',
        marginBottom: -150,
    },
    logoPay: {
        width: 100,
        height: 100,
    },
});

export default Login;