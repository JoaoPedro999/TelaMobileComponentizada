import React from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import styles from '../styles/stylescomponent';

const Componentimg = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.titulo}>Login</Text>

      <Image
        style={styles.senailogo}
        source={require('../SENAI.png')} // Adjusted the path to the image
      />
    </View>
  );
};

export default Componentimg;
