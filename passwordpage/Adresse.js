import React from 'react'
import { 
    View, 
    StyleSheet,
    TextInput,
    Text
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

const Adresse = () => {
    
    const [text, setText] = React.useState('');

    return(
        <View >
            <Text style={styles.text} >Veuillez entrer votre adresse email afin de rénitialiser votre mot de passe</Text>
            <View style={styles.action}>
                 <Ionicons
                    style={styles.userIcon} 
                    name="mail"
                    color="green"
                    size={20}
                />
                <TextInput 
                    placeholder="Votre adresse email"
                    style={styles.textInput}
                    onChangeText={ () => setText(text)}

                />
            </View> 
        </View>
              
    );
};

export default Adresse;

 const styles = StyleSheet.create({ 
    action: {
        flexDirection: 'row',
        paddingBottom: 5,
        marginTop:30,
        paddingHorizontal:10 
    },
    textInput: {
      flex:1,
      borderBottomWidth:2,
      borderBottomColor:'#B1B1B1',
      paddingHorizontal:40 
      },
    userIcon : {
      position: "absolute",
      top:16,
      left:10
      
      },
    text:{
    textAlign:'center',
    marginTop:50,
    },
  });