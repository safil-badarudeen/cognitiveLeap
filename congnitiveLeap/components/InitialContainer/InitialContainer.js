import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Button } from "react-native";
import { styles } from "./initialContainerstyles";

export function InitialContainer() {
  return (
    
      <View style={styles.container}>
        <View  > 
        <TouchableOpacity style={{flexDirection:'row',justifyContent:'hello'}} >
          <Button title='hello'/>
          <Button title='world'/>
        </TouchableOpacity>
        {/* <TouchableOpacity>
          
        </TouchableOpacity> */}
        {/* <Text style={{marginLeft:10,marginTop:0,color:'white'}}>Hello</Text>
        <Text  style={{marginLeft:50,marginTop:0,color:'white'}}>Welcome</Text> */}
        </View>
      </View>
     
    
  );
}
