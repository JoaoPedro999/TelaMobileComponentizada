// ImageBackgroundComponent.js
import { ImageBackground, StyleSheet } from "react-native";

// Importa os componentes personalizados do seu aplicativo

const ImageBackgroundComponent = ({ children }) => {
  {
    /* Componente ImageBackground exibe uma imagem de fundo com o estilo definido em styles.background */
  }
  return (
    <ImageBackground
      source={require("../assets/images/fundo.jpg")}
      resizeMode="cover"
      style={styles.bckimg}
    >
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bckimg: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ImageBackgroundComponent;
