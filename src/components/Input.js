import {Text, TextInput} from "react-native";
import {TailwindProvider} from "tailwindcss-react-native";

const Input = ({ what }) =>(

    <TailwindProvider>
        <Text className="ml-2 mt-5">{what}</Text>
        <TextInput className="
                    items-baseline
                    h-10
                    rounded-full
                    bg-gray-200
                    "
        />
    </TailwindProvider>
    )

export default Input;
