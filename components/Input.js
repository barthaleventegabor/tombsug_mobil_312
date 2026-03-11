import { StyleSheet, View, Text, TextInput } from "react-native";


/*
 * File: Input.js
 * Author: Bartha Levente
 * Copyright: 2026, Bartha Levente
 * Group: IN
 * Date: 2026-03-11
 * Github: https://github.com/barthaleventegabor/
 * Licenc: MIT
 */
import { StyleSheet, View, Text, TextInput } from "react-native";


function Input({label, value, onChangeText}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{label}</Text>
            <TextInput style={styles.input} value={value} onChangeText={onChangeText}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        
    },
    input:{
        backgroundColor:'white',
        borderColor:'navy',
        borderWidth:1,
        fontSize:24,
        margin:15,
        borderRadius:5,
    },
    text:{
        fontSize:24,
        textAlign:'center',
    }
});

export default Input;