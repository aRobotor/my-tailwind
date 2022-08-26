import React from 'react';
import {Button, Text, View} from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';

const HomeScreen = ({navigation}) => {
    return (
            <>
                <TailwindProvider>
                    <View>
                        <Text> Welcome on your dashboard</Text>
                        <Button
                            title={"Sign In"}
                            onPress={() =>
                        navigation.navigate('SignIn')}
                        />
                    </View>
                </TailwindProvider>
            </>
        );
};


export default HomeScreen;
