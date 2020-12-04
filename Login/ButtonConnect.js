import React from 'react'
import { 
    View, 
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';
// import { useNavigation } from '@react-navigation/native';

const ButtonConnect = () => {

//   const navigation = useNavigation();

    // const btnconnect = ()=> { navigation.navigate("ShoppingPage")}
    
    return(
        <View style={styles.btn}>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.btnLogin}>Se connecter  </Text>
            </TouchableOpacity>
        </View>  
    );
};

export default ButtonConnect;

 const styles = StyleSheet.create({ 
   btn:{
    paddingStart:50,
    paddingEnd:50
   },
   button: {
    marginTop:40,
    alignItems: "center",
    padding: 17,
    justifyContent:'space-between',
    borderRadius:30,
    backgroundColor:'orange',
  },
  btnLogin: {
    color:'white', 
    fontSize:15, 
    fontWeight:'bold',
  },
  });