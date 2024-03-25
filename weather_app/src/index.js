import{ View, Text, StyleSheet, Button, TextInput,Image,TouchableOpacity}from 'react-native'
import React from 'react'
import Constants from 'expo-constants'
import { useState,useRef ,useEffect} from 'react';
import Temp from "./Temp.svg";
import wind from "./wind.svg";
import humidity from "./humidity.svg";
import clock from "./clock.svg";
import { SvgUri } from 'react-native-svg';
import {MagnifyingGlassIcon} from "C:\Users\ELCOT\Weather_App\weather_app\node_modules\@heroicons\react\outline";
//import { View,Button, ScrollView,Image, TextInput } from 'react-native'
// Apikey b5563401497d4e4dbda81654242303


const Weather =() =>{
    const [loc,setLoc]=useState("london");
    const [wdata,setWdata]=useState({});
    
    let action=useRef(false);
    useEffect(()=>{
        if (action.current==false){
            initialData();
            action.current=true;
        }
    },[wdata]);
    async function initialData(){
        const response=await fetch(`https://api.weatherapi.com/v1/current.json?key=b5563401497d4e4dbda81654242303&q=london`,{mode:"cors"});
        let data=await response.json()
        setWdata(data);
       
        
        
        
    }
    
    

    async function apiData(){
        const response=await fetch(`https://api.weatherapi.com/v1/current.json?key=b5563401497d4e4dbda81654242303&q=${loc}`,{mode:"cors"});
        let data=await response.json()
        setWdata(data);
        

    
    }
    //<Image style={{width: 50, height: 50}} source={temp} />
    //<Button title = "click" onPress={()=>apiData()}/>
    function render_content(){
        if (action.current ==true){
            
            let last_update=wdata.current.last_updated.split(" ");
            let last_time_updated=last_update[1];
           
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
                
                <TouchableOpacity style={styles.button} onPress={()=>apiData()}>
                <MagnifyingGlassIcon size="24" color="white"/>
                </TouchableOpacity>
               
            </View>
            <View style={styles.middle}>
                <View style={styles.cityInfo}>
                    <Text>{wdata.location.name}</Text>
                    <Text>{wdata.location.country}</Text>
                </View>
                <View>
                <Image  style={{width: 50, height: 50}} source={{uri:`http:${wdata.current.condition.icon}` }}/>
                </View>
                <View style={styles.wInfo}>
                    <View style={styles.bind}>
                    <Text>{wdata.current.temp_c}</Text>
                    <Image source={Temp}/>
                    </View>
                    <Text>{wdata.current.condition.text}</Text>
                </View>
            </View>

            <View style={styles.footer}>
                <View style={styles.bind}>
                    <Image source={wind}/>
                    <Text>{wdata.current.wind_kph}</Text>
                </View>
                <View style={styles.bind}>
                    <Image source={humidity}/>
                    <Text>{wdata.current.humidity}</Text>
                </View>
                <View style={styles.bind}> 
                    <Image source={clock}/>
                    <Text>{last_time_updated}</Text>  
                </View>  
            </View>
        </View>
        )
            }
    }
    
    return(
        render_content()
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
      button:{
          backgroundColor:"gray",
      },
      middle:{
        flex: 0,

      },
      cityInfo:{
          flex:1,

      },
      wInfo:{
          flex:0,
      },
      bind:{
          flex:1,
      },
      footer:{
          flex:1,
      }


   
});