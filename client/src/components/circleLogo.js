import React from "react";
import {View, Image} from "react-native";

const Logo = require("../assets/pictures/logo/ohne_bg.png");

const CircleLogo = () => (
    <View style={{
        justifyContent:"center",
        alignItems: "center",
    }}>
        <Image source={require("../assets/pictures/logo/ohne_bg.png") } style={{width: 200, height:150, marginVertical:50}}/>
    </View>
)

export default CircleLogo;
