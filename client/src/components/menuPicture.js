import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native'
import React from "react";
import {TailwindProvider} from "tailwindcss-react-native";
import {Touchable} from "react-native-web";

const DeviceWidth = Dimensions.get('window').width


const MenuPicture = ({urls, handlePress, index}) =>(
<TailwindProvider>
    {
        index === 2 ?
            <TouchableOpacity className="mb-0 justify-center text-center border-b-2 border-b-gray-200"
                              style={{width: DeviceWidth*0.5, height: DeviceWidth*0.5, alignItems: 'center',flexDirection: 'column', }}
                              onPress={handlePress}>
                <Image source={urls} resizeMode="center"  style={{ flex: 1, width: 100 }} />
            </TouchableOpacity>
            :
            <TouchableOpacity className="mb-0 justify-center text-center "
                              style={{width: DeviceWidth*0.5, height: DeviceWidth*0.5, alignItems: 'center',flexDirection: 'column', }}
                              onPress={handlePress}>
                <Image source={urls} resizeMode="center"  style={{ flex: 1, width: 100 }} />
            </TouchableOpacity>
    }

</TailwindProvider>

)

export default MenuPicture;
