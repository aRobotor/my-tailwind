
import React, {Component} from 'react';
import SignIn from "./src/screens/signIn";
import HomeScreen from "./src/screens/homeScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();


class App extends Component {
    // static contextType = MyContext;
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="SignIn" component={SignIn} />
                    <Stack.Screen name="Home" component={HomeScreen} />
                </Stack.Navigator>
            </NavigationContainer>

        );
    }
}

export default App;

