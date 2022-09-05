import * as React from 'react';
import {View, Text, Button} from 'react-native';

const TestScreen = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Hallo</Text>
            <Button
            title="Go to Jane's profile"
            onPress={() =>
                navigation.navigate('Home')
            }
        />
        </View>
    );
}

export default TestScreen;
