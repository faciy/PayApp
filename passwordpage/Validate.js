import React from 'react'
import { 
    View, 
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';


const Validate = () => {
    
    return(
        <View style={styles.Validate}>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.btnValide}>VALIDER</Text>
            </TouchableOpacity>
        </View>  
    );
};

export default Validate;

 const styles = StyleSheet.create({ 
   button: {
    marginTop:60,
    padding: 17,
    borderRadius:30,
    backgroundColor:'orange',
    paddingLeft:50
  },
  btnValide: {
    color:'white', 
    fontSize:15, 
    fontWeight:'bold', 
    right:20  
  },
  
  });