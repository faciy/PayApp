import React from 'react'
import { 
    View, 
    StyleSheet,
    ScrollView,
} from 'react-native';
import Header from './Header'
import Adresse from './Adresse'
import Delete from './Delete'

const PasswordPage = () => {
    
    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <View style={styles.header}>
                   <Header />
                </View>
                <View style={styles.other}>
                   <Adresse />
                   <Delete />
                </View>
            </View>
        </ScrollView>
    );
};


export default PasswordPage;

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
  },

});