import React from 'react'
import { 
    View, 
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';
import ResetValidate from './ResetValidate';
// import { useNavigation } from '@react-navigation/native';

const ResetDelete = () => {
  
//   const navigation = useNavigation();

//   const btnDelete = ()=> { navigation.goBack()}

    return(
        <View style={styles.delete}>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.btnDelete}>ANNULER</Text>
            </TouchableOpacity>
            <ResetValidate />
        </View>  
    );
};

export default ResetDelete;

 const styles = StyleSheet.create({ 
   button: {
    marginTop:60,
    padding: 17,
    borderRadius:30,
    backgroundColor:'orange',
    paddingRight:40,
  },
  btnDelete: {
    color:'white', 
    fontSize:15, 
    fontWeight:'bold',
    left:10
  },
  delete:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:10,
    marginTop:-10,
  }
  });