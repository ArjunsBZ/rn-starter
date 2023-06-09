import React,{useState}from "react";
import { Text,View,StyleSheet,Button } from "react-native";
import ColorCounter from "../screens/Components/ColorCounter";
const COLOR_INCREMENT =15;
const  SquareScreen = () =>{
    const[red,setRed] = useState(0);
    const[green,setGreen] = useState(0);
    const[blue,setBlue] = useState(0);
    return(
        <View>
          <ColorCounter 
           onIncrease={() => setRed(red+COLOR_INCREMENT)}
           onDecrease={() => setRed(red-COLOR_INCREMENT)}
          color="Red"/>
          <ColorCounter 
          onIncrease={()=>setBlue(blue+COLOR_INCREMENT)}
          onDecrease={()=> setBlue(blue-COLOR_INCREMENT)}
          color="Blue"/>
          <ColorCounter 
          onIncrease={()=>setGreen(green+COLOR_INCREMENT)}
          onDecrease={()=> setGreen(green-COLOR_INCREMENT)}
          color="Green"/>
          <View style={{
            height:150,
             width:150,
             backgroundColor:`rgb(${red}, ${blue},${green})`}}/>

        </View>
    );
}

const styles =StyleSheet.create({

});

export default SquareScreen;