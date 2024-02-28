import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from '../styles/stylescomponent';

const Componentform = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.titulo}>Login</Text>

      <View>
        <TextInput style={styles.inputname} placeholder="Digite seu Nome" />
        <TextInput style={styles.inputname} placeholder="Digite seu E-mail" />
        <TextInput
          style={styles.inputname}
          placeholder="Digite sua Senha"
          secureTextEntry={true}
        />
      </View>
    </View>
  );
};

export default Componentform;
