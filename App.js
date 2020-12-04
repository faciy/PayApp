import React from 'react'
import {StyleSheet} from 'react-native'
// import Login from './Login/Login'
// import PasswordPage from './passwordpage/PasswordPage'
// import ContacterPage from './contacterpage/ContacterPage'
// import Navigation from './Navigation/Navigation'
// import About from './aboutpage/About'
// import Profil from './profilpage/Profil'
// import ResetAdmin from './resetAdmin/ResetAdmin'
// import Aide from './aidePage/Aide'
// import Notification from './ShoppingPage/Notification'
// import ShoppingPage from './ShoppingPage/ShoppingPage'
// import Chat from './chatpage/Chat'
// import Historique from './historiquepage/Historique'
import Today from './historiquepage/Today'
// import Week from './ShoppingPage/Week';
// import Termine from './ShoppingPage/Termine'

const App = () => {
  return (
    <Today />
  );
};

export  default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
});