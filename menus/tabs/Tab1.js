import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Tab1 = () => {
  return (
    <View style={myStyle.container}>
      <Text style={myStyle.normalText}>Tab 1</Text>
    </View>
  );
};

const myStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  normalText: {
    fontSize: 24,
    color: '#de3421',
    justifyContent: 'center',
  },
});

export default Tab1;
