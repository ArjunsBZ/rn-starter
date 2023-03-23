import React from "react";
import { Text,StyleSheet,View } from "react-native";
import ImageDeatil from "../screens/Components/ImageDeatil";

const ImageScreen = () => {
    return(
        <View>
            <ImageDeatil 
            title="Forest" 
            imageSource={require('../../assets/forest.jpg')}
            Score={10}
            />
            <ImageDeatil 
            title="Beach" 
            imageSource={require('../../assets/beach.jpg')}
            Score={20}
            />
            <ImageDeatil
             title="Mountain"
             imageSource={require('../../assets/mountain.jpg')}
             Score={30}
             />
           
        </View>
    );
};

const styles =StyleSheet.create({
   
});

export default ImageScreen;