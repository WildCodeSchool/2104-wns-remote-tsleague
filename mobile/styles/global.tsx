import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  container: {},
  input: {
    borderWidth: 1,
    width: "85%",
    padding: 10,
    fontSize: 18,
    borderRadius: 10,
    borderColor: "blue",
  },
  inputView: {
    alignItems: "center",
    paddingBottom: 25,
  },
  errorText: {
    color: "red",
  },
});
