import React from 'react'
import { 
    View, 
    StyleSheet,
    Image,
    Text,
    ScrollView
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Header, Left, Body, Button, Icon, Title } from 'native-base';
import delivery from '../assets/images/food-delivery.png'
import Appel from './Appel';
import ButtonAppel from './ButtonAppel';
import ButtonMessage from './ButtonMessage';
import Message from './Message'
import Email from './Email'
import ButtonEmail from './ButtonEmail';




const ContatcterPage = () => {

  const navigation = useNavigation();

  const Back = ()=> { navigation.goBack()}
    
    return (
            <View style={styles.container}>
                    <Header style={styles.header}>
                      <Left>
                        <Button transparent>
                          <Icon 
                          name='close'
                          onPress={(Back)}
                          />
                        </Button>
                      </Left>
                      <Body>
                        <Title>NOUS CONTACTEZ</Title>
                      </Body>
                    </Header>
                  
                <View style={styles.logo}>
                    <Image 
                    style={styles.logoPay}
                    source={delivery}
                    />
                </View>
                <View style={styles.text}>
                    <Text style={styles.textlieu}> 
                    <Text style={styles.ziptext}>PAY COTE D'IVOIRE</Text>
                    , Abidjan Soleil 3, 
                    Villa 252
                    </Text>
                </View>
                <Appel />
                <ButtonAppel />
                <Message />
                <ButtonMessage />
                <Email />
                <ButtonEmail />
            </View>
      
    );
};


export default ContatcterPage;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
  },
  header:{
    backgroundColor:'orange',
  },
  logo:{
    paddingVertical: 20,
    paddingHorizontal: 25,
    alignItems: 'center',
  },
  logoPay:{
      width:100,
      height:100,  
  },
  ziptext:{
    fontWeight:'bold'
  },
  textlieu:{
      textAlign:'center'
  }
 
  
});