import {View,Text,SafeAreaView,TextInput} from 'react-native'
import React from 'react' 

<SafeAreaView className='flex flex-1'>
    {/*search section*/}
    <View style={{height:'7%'}} className="mx-4 relative z-50">
        <View className="flex-row justify-end items-center rounded-full"
        style={{backgroundColor:TouchableHighlightComponent.bgWhite(0.2)}}>
            <TextInput
            placeholder ='Search city'
            placeholderTextColor={'lightgray'}
            className="pl-6 h-10 fles-1 text-base text-white"/>

        </View>
    </View>
</SafeAreaView>
