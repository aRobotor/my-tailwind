
import React, {Component} from 'react';
import SignIn from "./src/screens/signIn";
import HomeScreen from "./src/screens/homeScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import Training from "./src/screens/training";

const Stack = createNativeStackNavigator();

class App extends Component {
    // static contextType = MyContext;
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator
                    // initialRouteName={"Home"}
                    screenOptions={{headerShown: false}}
                >
                    <Stack.Screen name="SignIn" component={SignIn}  />
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Training" component={Training} />
                </Stack.Navigator>
            </NavigationContainer>

        );
    }
}

export default App;

