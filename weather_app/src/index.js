import{ View, Text, StyleSheet}from 'react-native'
import React from 'react'
import Constants from 'expo-constants'


const Weather =() =>{
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Weather App</Text>

            </View>
        </View>
    )
}
export default Weather

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#FCF5DB',
      paddingTop:Constants.statusBarHeight,
     

    },
    header:{
        alignItems:'center',
        backgroundColor:'#C5D2EF',
        height:80,
        justifyContent:'center',
        
    },
    headerTitle:{
        fontSize:29,
        fontWeight:'bold',
    }


    

  });