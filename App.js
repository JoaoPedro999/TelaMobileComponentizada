import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  ImageBackground,
} from "react-native";
import styles from "./assets/styles/stylescomponent";
import ComponentForm from "./assets/components/component_form";
import Componentbtn from "./assets/components/component_btn";
import Componentimg from "./assets/components/component_img";

export default function App() {
  btn = () => {
    alert("Logado com Sucesso");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/fundo.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        teste
        
       <ComponentForm/>

        <Componentbtn/>

        <Componentimg/>

     
        <StatusBar style="auto" />

      </ImageBackground>
    </View>
  );
}

