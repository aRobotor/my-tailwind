import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';


export default class HomeScreen extends Component {
    render() {
        return (
            <>
                <TailwindProvider>
                    <View>
                        <Text> Welcome on your dashboard</Text>
                    </View>
                </TailwindProvider>


            </>
        )
    }
}

