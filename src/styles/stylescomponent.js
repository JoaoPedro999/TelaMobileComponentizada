import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: "white",
    fontSize: 50,
  },
  inputname: {
    color: "black",
    borderWidth: 1,
    borderColor: "lightgray",
    marginBottom: 10,
    width: 300,
    height: 50,
    backgroundColor: "lightgray",
    opacity: "80%",
  },
  button: {
    backgroundColor: "black",
    fontSize: 20,
    width: 150,
    height: 50,
    opacity: 0.80,
    justifyContent: "center",
    alignItems: "center",
  },
  login: {
    color: "white",
    fontSize: 20,
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 50,
    marginBottom: 20,
    borderBottomColor: "black",
    borderBottomWidth: 2,
  },
  senailogo: {
    width: 250,
    height: 50,
    bottom: 400,
  },
});

export default styles;
