/*
 * File: Header.js
 * Author: Bartha Levente
 * Copyright: 2026, Bartha Levente
 * Group: IN
 * Date: 2026-03-11
 * Github: https://github.com/barthaleventegabor/
 * Licenc: MIT
 */

import { StyleSheet, Text, View } from "react-native";

function Header() {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Rombuszba írható kör sugara</Text>
    </View>
  );
}

const styles  = StyleSheet.create({
    container: {
        backgroundColor: 'indigo',
        width: '100%',
        padding: 5,
    },
    text:{
        fontSize:32,
        color:'white',
        textAlign:'center',
 
    }

});

export default Header;