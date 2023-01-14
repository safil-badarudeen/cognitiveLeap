import { StyleSheet } from 'react-native';




export const styles= StyleSheet.create({
  container: {
    flex:1,
    margin:5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
    borderRadius:5,
  },
  innerContainer:{
   
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',
  },
  text: {
    fontSize: 10,
    color: 'red',
  },
  button:{
    backgroundColor:'black'
  }
});
