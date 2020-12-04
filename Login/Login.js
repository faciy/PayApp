import React from 'react'
import { 
    View, 
    StyleSheet,
    ScrollView
} from 'react-native';
import Header from './Header'
import Username from './Username'
import Password from './Password'
import ButtonConnect from './ButtonConnect'
import MotDePasse from './MotDePasse'
import Contacter from './Contacter';


const Login = () => {

    
    
    return (
       <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Header />
                </View>
                <View style={styles.other}>
                    <Username />
                    <Password />
                    <MotDePasse />
                    <Contacter />
                    <ButtonConnect />
                </View>
            </View>
        </ScrollView>
    );
};


export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff'
  },
  scrollView:{
    backgroundColor:'white',
  },
  header: {
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center',
  },


});