import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {InitialContainer} from './components/InitialContainer/InitialContainer'

export default function App() {
  return (
    <View style={styles.appcontainer}>
      <InitialContainer/>
      <StatusBar style="light-content" />
    </View>
  );
}

const styles = StyleSheet.create({
  appcontainer: {
    flex:1,
    backgroundColor:'white',
    marginTop:35,
  },
});
