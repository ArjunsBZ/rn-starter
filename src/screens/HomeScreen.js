import React from "react";
import { Text, StyleSheet,View, Button,TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return(
  <View><Text style={styles.text}>HomeScreen</Text>
  <Button
  onPress={() => navigation.navigate('Component')}
   title="Go TO Componentscreen"
  />
  <TouchableOpacity onPress={() => navigation.navigate('List')}>
    <Text>Go To List screen</Text>
  </TouchableOpacity>
  <Button
  onPress={() => navigation.navigate('Image')}
   title="Go TO Imagescreen"
  />
  <Button
  onPress={() => navigation.navigate('Counter')}
   title="Go TO Counterscreen"
  />
    <Button
  onPress={() => navigation.navigate('Color')}
   title="Go TO Colorscreen"
  />
  <Button
  onPress={() => navigation.navigate('Square')}
   title="Go TO SSquarescreen"
  />
  </View>
  ); 
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
