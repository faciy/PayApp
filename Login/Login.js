import React from 'react'
import {
    View,
    StyleSheet,
    ScrollView,
    Image
} from 'react-native';
import Header from './Header'
import Username from './Username'
import Password from './Password'
import ButtonConnect from './ButtonConnect'
import MotDePasse from './MotDePasse'
import Contacter from './Contacter';
import delivery from '../assets/images/food-delivery.png'


const Login = () => {
    const [text, setText] = React.useState('');

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Header />
                </View>
                <View style={styles.other}>
                    <Username onChangeText={() => setText()} />
                    <Password />
                    <MotDePasse />
                    <Contacter />
                    <ButtonConnect />
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


export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    scrollView: {
        backgroundColor: 'white',
    },
    header: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    logo: {
        paddingVertical: 20,
        paddingHorizontal: 25,
        alignItems: 'center',
        marginTop: 40,
    },
    logoPay: {
        width: 100,
        height: 100,
    },


});