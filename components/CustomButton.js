/*
* File: CustomButton.js
* Author: Bartha Levente
* Copyright: 2026, Bartha Levente
* Group: IN
* Date: 2026-03-11
* Github: https://github.com/barthaleventegabor/
* Licenc: MIT
*/
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

function CustomButton({title, onPress}) {
    return(
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: 'lightblue',
        padding:5,
        borderRadius: 10,
        margin: 15,
        boxShadow: '5px 5px 5px navy',
    },
    text:{
        fontSize: 24,
        textAlign: 'center',

    }
});

export default CustomButton;