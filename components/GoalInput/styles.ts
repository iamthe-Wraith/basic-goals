import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#0e3087',
  },
  button: {
    marginLeft: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%'
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 150,
    marginBottom: 30,
    borderRadius: 75,
    overflow: 'hidden',
  },
  textInput: {
    width: '100%',
    marginBottom: 15,
    padding: 16,
    borderWidth: 1,
    borderColor: '#5edaec',
    borderRadius: 6,
    backgroundColor: '#5edaecaa'
  },
});