import React, {useState} from 'react';
import {ScrollView, StatusBar, Text, TextInput, View} from 'react-native';
import {TailwindProvider} from 'tailwindcss-react-native';
import SubmitButton from "../components/submitButton";
import Input from "../components/Input";

const SignIn = ({navigation}) => {

    const [loading, setLoading] = useState(false);
    const [loginData, setLoginData] = useState(false);

    const checkLoginData = () => {
        setLoginData(true)
    }

    const handleSubmit = async () => {
        setLoading(true)
        checkLoginData()
        setLoginData(true)
        loginData ?
            navigation.navigate("Home")
            :
            alert("Anmeldedaten sind falsch")

        setLoading(false)

    }
    return (
        <>
            <TailwindProvider>
                <StatusBar></StatusBar>
                <View className="mt-16">
                    <Text className="text-xl font-bold text-center mt-5">Willkommen bei Uhuru</Text>
                </View>
                <View className="flex-1 justify-end m-2">
                    <Input what="Email"/>
                    <Input what="Password"/>
                    <SubmitButton title="Login" handleSubmit={handleSubmit} loading={loading}/>
                </View>
            </TailwindProvider>
        </>
    )
}


export default SignIn;
