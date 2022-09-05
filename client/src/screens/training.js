import React from 'react';
import {TailwindProvider} from "tailwindcss-react-native";
import {Button, ImageBackground, ScrollView, StatusBar, Text, View} from "react-native";
import backgroundImage from "../assets/pictures/texture_blue_green.jpg";

const Training = ({navigation}) => {
    return (
        <>
            <TailwindProvider>
                <StatusBar></StatusBar>
                <ImageBackground source={backgroundImage} resizeMode="cover"
                                 style={{flex:1, width:null, height:null }}
                >

                    <ScrollView className="mt-16">
                        <Text className="text-xl font-bold text-center mt-5">Dein Trainingsbereich</Text>
                        <Button title={"Dashboard"} className="text-black bg-black" onPress={() => navigation.navigate('Home')} />


                    </ScrollView>

                </ImageBackground>
            </TailwindProvider>
        </>
    );
};


export default Training;
