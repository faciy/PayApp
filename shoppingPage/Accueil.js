import React from 'react'
import {StyleSheet} from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Termine from '../shoppingpage/Termine'
import Autre from '../shoppingpage/Autre'
import EnCours from '../shoppingpage/EnCours'

const Tab = createMaterialTopTabNavigator();

const Accueil = () => {
  return (
    
    <Tab.Navigator 
    style={{top:30}}
    >
      <Tab.Screen 
      name="Autre" 
      component={Autre} 
      options={{
        title:'En attentes',
       
      }}
      />
      <Tab.Screen name="Termine" component={Termine} />
      <Tab.Screen 
      name="En Cours" 
      component={EnCours}  
      options={{
        title:'En Cours',
        
       
      }}
      />
    </Tab.Navigator>
   
  );
}

export default Accueil;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },

});