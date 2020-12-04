import React from 'react'
import { 
    View, 
    Text, 
    StyleSheet,
    Image
} from 'react-native';

const Appel = () => {
    return (
        <View style={styles.text}>
            <Text style={styles.textBold}>APPELEZ NOUS</Text>
        </View>
    );
};
  

export default Appel;

const styles = StyleSheet.create({
   text:{
    backgroundColor:'#00C506', 
    paddingHorizontal:20, 
    marginTop:20,
    paddingVertical:4, 
    marginHorizontal:10, 
    marginVertical:10,
    borderTopLeftRadius:50,
    borderBottomRightRadius:50
   },
   textBold:{
       fontWeight:'bold'
   }

  });