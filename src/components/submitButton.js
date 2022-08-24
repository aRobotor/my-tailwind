import {Text, TouchableOpacity} from "react-native";
import React from "react";
import {TailwindProvider} from 'tailwindcss-react-native';

const SubmitButton = ({title, handleSubmit, loading}) => (

    <TailwindProvider>
        <TouchableOpacity className="
        bg-orange-500
        h-15
        w-20
        items-center
        justify-center
        mb-10
        mx-8
        my-2
        rounded-full
        "
            onPress={handleSubmit}
            // style={{
            //     backgroundColor: "#ff9900",
            //     height: 50,
            //     justifyContent: "center",
            //     marginBottom: 20,
            //     marginHorizontal: 10,
            //     borderRadius: 24,
            // }}
        >

            <Text className=""> {
                loading ? "Please wait..." : title
            } </Text>

        </TouchableOpacity>
    </TailwindProvider>
)
export default SubmitButton;
