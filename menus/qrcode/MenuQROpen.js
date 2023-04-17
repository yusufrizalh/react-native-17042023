import * as React from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-elements';
import styles from '../../styles/Styles';

const MenuQROpen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button
        title="Generate QR"
        onPress={() => navigation.navigate('MenuQRGenerator')}
        icon={{...styles.iconButtonHome, name: 'qr-code'}}
        iconContainerStyle={styles.iconButtonHomeContainer}
        titleStyle={styles.titleButtonHome}
        buttonStyle={styles.buttonHome}
        containerStyle={styles.buttonHomeContainer}
      />
      <Button
        title="Scan QR"
        onPress={() => navigation.navigate('MenuQRScanner')}
        icon={{...styles.iconButtonHome, name: 'qr-code-scanner'}}
        iconContainerStyle={styles.iconButtonHomeContainer}
        titleStyle={styles.titleButtonHome}
        buttonStyle={styles.buttonHome}
        containerStyle={styles.buttonHomeContainer}
      />
    </View>
  );
};

export default MenuQROpen;
