import React from 'react';
import {Button, ScrollView, Text, View} from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';

const HomeScreen = ({navigation}) => {
    return (
            <>
                <TailwindProvider>
                    <ScrollView className="">
                        <Text> Welcome on your dashboard</Text>
                        <Button
                            title={"Sign In"}
                            onPress={() =>
                        navigation.navigate('SignIn')}
                        />
                    </ScrollView>
                </TailwindProvider>
            </>
        );
};


export default HomeScreen;
