import React from 'react'
import {
  View,
  StyleSheet,
  ScrollView,
  Image
} from 'react-native';
import Header from './Header'
import Adresse from './Adresse'
import Delete from './Delete'
import delivery from '../assets/images/food-delivery.png';

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
        <View style={styles.logo}>
          <Image
            style={styles.logoPay}
            source={delivery}
          />
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
  scrollView: {
    backgroundColor: 'white',
  },
  header: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  logoPay: {
    width: 100,
    height: 100,
  },
  logo: {
    paddingVertical: 20,
    paddingHorizontal: 25,
    alignItems: 'center',
    marginTop: 40,
  },

});