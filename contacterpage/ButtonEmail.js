import React from 'react'
import { 
    View, 
    StyleSheet,
    Text,
    TouchableOpacity,
    Linking
} from 'react-native';

const ButtonEmail = () => {

  const email = () =>{
    Linking.openURL('mailto:kouassicharlesothnie@gmail.com')
}
    
    return(
        <View style={styles.btn}>
            <TouchableOpacity style={styles.button} onPress={email}>
            <Text style={styles.btnLogin}>ECRIRE UN MAIL</Text>
            </TouchableOpacity>
        </View>  
    );
};

export default ButtonEmail;

 const styles = StyleSheet.create({
    btn:{
            paddingStart:50,
            paddingEnd:50
        },
    button: {
        marginTop:10,
        alignItems: "center",
        padding: 16,
        backgroundColor:'orange',
        marginVertical:30,
        marginHorizontal:30,
        borderRadius:30
        
    },
    btnLogin: {
        color:'white', 
        fontSize:15, 
        fontWeight:'bold',
    },
  });