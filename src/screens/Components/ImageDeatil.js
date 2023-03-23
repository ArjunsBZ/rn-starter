import React from "react";
import {Text,StyleSheet,View,Image} from "react-native";

const ImageDeatil = props => {
    return(
    <View>
        <Image source={props.imageSource}/>
         <Text> {props.title} </Text>
         <Text> ImageScore-{props.Score}</Text>
    </View>
   
    ); 
    
};

const styles = StyleSheet.create({

});

export default ImageDeatil;