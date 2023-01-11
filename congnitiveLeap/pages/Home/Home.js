import { View, Text } from "react-native";
import { InitialContainer } from "../../components/InitialContainer/InitialContainer";
import { Navbar } from "../../components/Navbar/Navbar";
import {styles} from './styles'


export const Home = () => {
  return (
    <View style={styles.maincontainer} >
      <View  style={styles.navbar}>
        <Navbar />
      </View>
      <View style={styles.home}>
        <InitialContainer />
      </View>
    </View>
  );
};
