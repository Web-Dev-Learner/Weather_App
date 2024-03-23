import{ View, Text, StyleSheet, Button, TextInput}from 'react-native'
import React from 'react'
import Constants from 'expo-constants'
import { useState } from 'react'
// Apikey b5563401497d4e4dbda81654242303


const Weather =() =>{
    const [loc,setLoc]=useState("London");


    async function apiData(){
        const response=await fetch(`https://api.weatherapi.com/v1/current.json?key=b5563401497d4e4dbda81654242303&q=${loc}`,{mode:"cors"});
        const Wdata=await response.json();
        console.log(Wdata);
    
    }
    const handleLocation =()=>{
        console.log(`loction ${loc}`);
        //we are going to get the value of text input
        //value=> apiData(value)
        apiData();

    }
    
    
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Weather App</Text>
                
            </View>
            <View>
                <TextInput 
                placeholder="Enter a city"
                value={
                    loc
                }
                onChangeText={
                    (text)=>{setLoc(text)}
                }
                
                />
                <Button title = "click" onPress={()=>handleLocation()}/>
               
            </View>
            <View>
                //sridevi's Section
            </View>
        </View>
    )
}

export default Weather

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#ee82ee',
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