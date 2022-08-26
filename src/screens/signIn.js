import React, { useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import SubmitButton from "../components/submitButton";

const SignIn = ({ navigation }) => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        setLoading(true)
        alert('Hey du, was machst du da?!')
        setLoading(false)

    }
    return(
        <>
            <TailwindProvider>
                <ScrollView>
                <View className="flex-1 items-center ">
                    <Text className="text-xl font-bold"
                    >Here speaks the Sign In Page</Text>
                    <SubmitButton title="Login" handleSubmit={handleSubmit} loading={loading}/>
                    <SubmitButton title="Change Screen" handleSubmit={()=> navigation.navigate('Home')} loading={loading}/>
                </View>
                </ScrollView>
            </TailwindProvider>
        </>
    )
}

export default SignIn;
