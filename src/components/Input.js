import {Text, TextInput, View} from "react-native";
import {TailwindProvider} from "tailwindcss-react-native";

const Input = ({ what }) =>(

    <TailwindProvider>
        <View className="mx-10 ">
        <Text className="ml-2 text-center text-lg">{what}</Text>
        <TextInput className="
                    items-baseline
                    h-10
                    rounded-full
                    bg-gray-200
                    mb-5
                    "
        />
        </View>
    </TailwindProvider>
    )

export default Input;
