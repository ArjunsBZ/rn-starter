import React,{useState} from "react";
import { View,StyleSheet,Text,Button } from "react-native";

const CounterScreen = ()=>{
const [Counter,SetCounter] = useState(0);

return(
  <View>
    <Button 
    title="Increase"
    onPress={() =>{
        SetCounter(Counter +1);

    }}
    />
       <Button 
    title="Decrease"
    onPress={() =>{
        SetCounter(Counter -1);

    }}
    />
    
    <Text>current Count:{Counter} </Text>
  </View>  
);
};

const style = StyleSheet.create({

});

export default CounterScreen;