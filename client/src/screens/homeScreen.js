import React from 'react';
import {Button, Dimensions, Image, ImageBackground, ScrollView, StatusBar, Text, View} from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import MenuPicture from "../components/menuPicture";



const HomeScreen = ({navigation}) => {
    const DeviceWidth = Dimensions.get('window').width;
    const backgroundImageHome = require("../assets/pictures/logo/Farbverlauf.png");
    const column1 = [require('../assets/pictures/runner.png'), require('../assets/pictures/runner.png'), require('../assets/pictures/runner.png')];
    const column2 = [require('../assets/pictures/runner.png'), require('../assets/pictures/runner.png'), require('../assets/pictures/runner.png')];

    const handlePress = () => {
        navigation.navigate("Training")
    }

    return (
            <>
                <TailwindProvider>
                    <StatusBar></StatusBar>
                    <ImageBackground source={backgroundImageHome} resizeMode="cover"
                    style={{flex:1, width:null, height:null }}
                    >

                    <ScrollView className="mt-16">
                        <Text className="text-xl font-bold text-center mt-5">Dein Dashboard</Text>
                        <Button title={"Ausloggen"} className="text-colour" onPress={() => navigation.navigate('SignIn')} />

                        <View style={{flex:1, justifyContent:"center", alignItems:"center",  flexDirection: 'row',}}>
                            <View className="">
                                {
                                    column1.map((url,index) => (
                                        <View className="border-t-2 border-r-2 border-neutral-300">
                                        <MenuPicture urls={url} index={index} handlePress={handlePress}/>
                                        </View>
                                            ))
                                }
                            </View>
                            <View>
                                {
                                    column2.map((url,index) => (
                                        <View className="border-t-2 border-neutral-300">
                                        <MenuPicture urls={url} index={index} handlePress={handlePress}/>
                                        </View>
                                    ))

                                }
                            </View>
                        </View>
                    </ScrollView>

                    </ImageBackground>
                </TailwindProvider>
            </>
        );
};


export default HomeScreen;
