
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

            <View style={styles.inputContainer}>
            
                <TextInput 

                style={styles.input}


                placeholder="Enter a city"
                value={
                    loc
                }
                onChangeText={
                    (text)=>{setLoc(text)}
                }
                
                />
                <Button title = "search" onPress={()=>handleLocation()}/>
               
            </View>


            
        </View>
    )
}

export default Weather

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#3c3c3c',
      paddingTop:Constants.statusBarHeight,
     

    },
    header:{
        alignItems:'center',
        backgroundColor:'#6a5acd',
        height:80,
        justifyContent:'center',
        
    },
    headerTitle:{
        fontSize:29,
        fontWeight:'bold',
        
       
    },

   // inputContainer to style the box contain TextInput & Button
   // input style is for TextInput to customize or align 
   
    inputContainer: {
        backgroundColor: '#fff',
        padding: 10,
        margin: 20,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    input: {
        flex: 1,
        marginRight: 10,
        paddingVertical: 8,
        paddingHorizontal: 15,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        fontSize: 16,
       
        
        
    },
    
    
});



   
