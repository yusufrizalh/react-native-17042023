import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MenuQROpen from './MenuQROpen';
import MenuQRGenerator from './MenuQRGenerator';
import MenuQRScanner from './MenuQRScanner';

const Stack = createNativeStackNavigator();

const MenuQR = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="MenuQROpen">
        <Stack.Screen
          name="MenuQROpen"
          component={MenuQROpen}
          options={{title: 'QR Code'}}
        />
        <Stack.Screen name="MenuQRGenerator" component={MenuQRGenerator} />
        <Stack.Screen name="MenuQRScanner" component={MenuQRScanner} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MenuQR;
