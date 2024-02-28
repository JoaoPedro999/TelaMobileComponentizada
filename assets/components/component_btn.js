import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from '../styles/stylescomponent';

const Componentbtn = () => {
  const btn = () => {
    alert("Logado com Sucesso");
  };

  return (
    <View style={styles.body}>
      <Button onPress={btn} style={styles.button} title="Logar" />
    </View>
  );
};

export default Componentbtn;
