import React from 'react'
import { 
    View, 
    Text, 
    StyleSheet,
    Image
} from 'react-native';



const Header = () => {
    return(
        <View style={styles.textheader}>
                <View style={styles.header}>
                    <Text style={styles.title}>Se connecter</Text>
                </View>
        </View>
               
    );
};
export default Header;

const styles = StyleSheet.create({
    title: {
        color: '#000',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign:'center'
    },
    textheader: {
    marginTop:80
    }

  });