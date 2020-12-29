import React, {useEffect} from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import delivery from '../assets/images/food-delivery.png';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {

    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login')
        }, 4000);
    }, [])

    return (
        <View style={styles.container}>
            <Image style={styles.logoPay} source={delivery} />
            <Text style={styles.pay}>PAY<Text style={styles.pays}>Côte d'Ivoire</Text></Text>
        </View>
    )
}

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DF9F00',
    },
    logoPay: {
        width: 100,
        height: 100,
    },
    pay:{
        color: 'green', 
        fontSize: 40, 
        fontWeight:'bold'
    },
    pays:{
        color: 'white', 
        fontSize: 20
    }

});
