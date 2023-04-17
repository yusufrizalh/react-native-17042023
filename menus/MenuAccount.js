import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Tab1 from './tabs/Tab1';
import Tab2 from './tabs/Tab2';
import Tab3 from './tabs/Tab3';

const Tab = createMaterialTopTabNavigator();

const MyTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Tab1"
        component={Tab1}
        options={{
          tabBarLabel: 'Tab1',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Tab2"
        component={Tab2}
        options={{
          tabBarLabel: 'Tab2',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Tab3"
        component={Tab3}
        options={{
          tabBarLabel: 'Tab 3',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const MenuAccount = () => {
  return <MyTab />;
};

export default MenuAccount;
