import React from 'react'
import { 
    View, 
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

const MotDePasse = () => {

    const navigation = useNavigation();

    const PassPage = ()=> { navigation.navigate("PasswordPage")}

    return (
        <View style={styles.forget}>
            <TouchableOpacity onPress={(PassPage)}>
                <Text style={styles.mdp}>Mot de passe oublié ?</Text>
            </TouchableOpacity>
        </View>
    );
};

export default MotDePasse;

 const styles = StyleSheet.create({ 
   forget:{
    marginTop:40,
    },
    mdp: {
        textAlign:'center',
        color:'green',
        fontSize:15,
        fontWeight:'bold'
    },
   
   
  });