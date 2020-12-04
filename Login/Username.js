import React from 'react'
import { 
    View, 
    StyleSheet,
    TextInput
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

const Username = () => {
    
    const [text, setText] = React.useState('');

    return(
            <View style={styles.action}>
                 <Ionicons
                    style={styles.userIcon} 
                    name="mail"
                    color="green"
                    size={20}
                />
                <TextInput 
                    placeholder="Nom d'utilisateur"
                    style={styles.textInput}
                    onChangeText={ () => setText(text)}

                />
            </View>   
    );
};

export default Username;

 const styles = StyleSheet.create({ 
    action: {
      flexDirection: 'row',
      paddingBottom: 5,
      marginTop:50,
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
    
    }
  });