import {Text, TextInput, View} from "react-native";
import {TailwindProvider} from "tailwindcss-react-native";

const Input = ({
    name, value, setValue,
    autoCapitalize="none",
    keyboardType = "default",
    secureTextEntry = false,
} ) =>(

    <TailwindProvider>
        <View className="mx-10 ">
        <Text className="ml-2 text-center text-lg">{name}</Text>
        <TextInput
            autoCorrect={false}
            autoCapitalize={autoCapitalize}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}

            className="
                    items-baseline
                    h-10
                    rounded-full
                    bg-gray-200
                    mb-5
                    text-center
                    "
                   value = {value}
                   onChangeText = {(text) => setValue=(text)}
        />
        </View>
    </TailwindProvider>
    )

export default Input;
