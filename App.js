import {StatusBar} from 'expo-status-bar';
import React, {Component} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {TailwindProvider} from 'tailwindcss-react-native';
import SignIn from "./src/screens/signIn";
import {MyContext} from './src/context';
import HomeScreen from "./src/screens/homeScreen";

class App extends Component {
    static contextType = MyContext;
    render() {
        return (
            <TailwindProvider>
                <SignIn></SignIn>
            </TailwindProvider>
        );
    }
}

export default App;

