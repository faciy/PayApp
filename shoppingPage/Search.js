import React from 'react'
import { 
    View, 
    StyleSheet,
    TextInput,
    Text
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

const Search = () => {
    
    const [text, setText] = React.useState('');

    return(
    
        <View style={styles.search}>
           
            <View style={styles.action}>
                 <Ionicons
                    style={styles.userIcon} 
                    name="search"
                    color="green"
                    size={20}
                />
                <TextInput 
                    placeholder="Rechercher"
                    style={styles.textInput}
                    onChangeText={ () => setText(text)}

                />
            </View> 
        </View>
              
    );
};

export default Search;

 const styles = StyleSheet.create({ 
  action: {
    flexDirection: 'row',
    paddingBottom: 5,
    backgroundColor:'white'
  },
  textInput: {
    flex:1,
    borderBottomWidth:2,
    borderBottomColor:'#B1B1B1',
    marginRight:30,
    marginLeft:30,
},
userIcon : {
    position: "absolute",
    top:16,
    right:30,
},
text:{
    textAlign:'center',
    // marginBottom:20,
},
// search:{
//     bottom:40
// }

});