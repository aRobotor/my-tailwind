import React, {useState} from 'react';
import {ImageBackground, ScrollView, StatusBar, Text, TextInput, View} from 'react-native';
import {TailwindProvider} from 'tailwindcss-react-native';
import SubmitButton from "../components/submitButton";
import Input from "../components/Input";
import CircleLogo from "../components/circleLogo";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import axios from "axios";

const SignIn = ({navigation}) => {

    const[email, setEmail] = useState("e.b@uhuru.de");
    const[password, setPassword] = useState("123.ABC.def")

    const [loading, setLoading] = useState(false);
    const [loginData, setLoginData] = useState(true);

    const backgroundImage = require("../assets/pictures/logo/Farbverlauf.png");


    const checkLoginData = () => {
        setLoginData(true)
    }

    const handleSubmit = async () => {
        setLoading(true)
        if(!email || !password){
            alert("Please fill out both fields!");
            setLoading(false);
            return;
        }

        try{
            const { data } = await axios.post('https://localhost:8000', {
                email, password, });
            setLoading(false);
            console.log("SIGN IN SUCCESS => ", data);
            alert("Sign in successfull");
            } catch (err){
            console.log(err)
            setLoading(false);

        }
        checkLoginData()
        loginData ?
            navigation.navigate("Home")
            :
            alert("Anmeldedaten sind falsch")

        setLoading(false)

    }
    return (
        <>
            <ImageBackground source={backgroundImage} resizeMode="cover"
                             style={{flex:1, width:null, height:null }}
            >

            <TailwindProvider>

                <StatusBar></StatusBar>
                <KeyboardAwareScrollView className="">
                <View className="mt-16">
                    <Text className="text-xl font-bold text-center mt-5 text-white">Willkommen bei Uhuru</Text>
                </View>
                <CircleLogo/>
                    <View style={{height:450}}>
                        <View className="flex-1 justify-end m-2">
                            <Input what="Email" value={email} setValue={setEmail}/>
                            <Input what="Password"
                                   value={password}
                                   setValue={setPassword}
                                   secureTextEntry={true}
                                   autoCompleteType="password"
                            />
                            <SubmitButton title="Login" handleSubmit={handleSubmit} loading={loading}/>
                            <Text className="text-center text-gray-700">Forgot Password</Text>
                        </View>
                    </View>

                </KeyboardAwareScrollView>
            </TailwindProvider>

            </ImageBackground>

        </>
    )
}


export default SignIn;
