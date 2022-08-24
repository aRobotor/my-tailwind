import React, {useContext, useState} from 'react';
import { Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import SubmitButton from "../components/submitButton";
import {MyContext} from "../context";

const SignIn = () => {
    const context = useContext(MyContext);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        setLoading(true)
        alert('Hey du, was machst du da?!')
        setLoading(false)


    }

    return(
        <>
            <TailwindProvider>
                <View className="flex-1 items-center justify-center">
                    <Text>Here speaks the Sign In Page</Text>
                    <SubmitButton title="Login" handleSubmit={handleSubmit} loading={loading}/>
                </View>
            </TailwindProvider>
        </>
    )
}

export default SignIn;
