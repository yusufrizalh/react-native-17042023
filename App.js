import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import MenuHome from './menus/MenuHome';
import MenuAbout from './menus/MenuAbout';
import MenuAccount from './menus/MenuAccount';
import MenuEmployees from './menus/employees/MenuEmployees';
import MenuQR from './menus/qrcode/MenuQR';
import MenuGmaps from './menus/gmaps/MenuGmaps';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="MenuHome"
        component={MenuHome}
        options={{
          title: 'Home Page',
          headerStyle: {
            backgroundColor: '#de3421',
            borderBottomColor: 'green',
            borderBottomWidth: 2,
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {fontSize: 18, fontStyle: 'normal'},
        }}
      />
      <Drawer.Screen
        name="MenuAbout"
        component={MenuAbout}
        options={{
          title: 'About Page',
          headerStyle: {
            backgroundColor: '#de3421',
            borderBottomColor: 'green',
            borderBottomWidth: 2,
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {fontSize: 18, fontStyle: 'normal'},
        }}
      />
      <Drawer.Screen
        name="MenuAccount"
        component={MenuAccount}
        options={{
          title: 'Account Page',
          headerStyle: {
            backgroundColor: '#de3421',
            borderBottomColor: 'green',
            borderBottomWidth: 2,
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {fontSize: 18, fontStyle: 'normal'},
        }}
      />
      <Drawer.Screen
        name="MenuEmployees"
        component={MenuEmployees}
        options={{
          title: 'Employees Page',
          headerStyle: {
            backgroundColor: '#de3421',
            borderBottomColor: 'green',
            borderBottomWidth: 2,
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {fontSize: 18, fontStyle: 'normal'},
        }}
      />
      <Drawer.Screen
        name="MenuQR"
        component={MenuQR}
        options={{
          title: 'QR Code',
          headerStyle: {
            backgroundColor: '#de3421',
            borderBottomColor: 'green',
            borderBottomWidth: 2,
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {fontSize: 18, fontStyle: 'normal'},
        }}
      />
      <Drawer.Screen
        name="MenuGmaps"
        component={MenuGmaps}
        options={{
          title: 'Google Maps',
          headerStyle: {
            backgroundColor: '#de3421',
            borderBottomColor: 'green',
            borderBottomWidth: 2,
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {fontSize: 18, fontStyle: 'normal'},
        }}
      />
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <MyDrawer />
    </NavigationContainer>
  );
};

export default App;
