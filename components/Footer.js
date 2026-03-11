/*
 * File: Footer.js
 * Author: Bartha Levente
 * Copyright: 2026, Bartha Levente
 * Group: IN
 * Date: 2026-03-11
 * Github: https://github.com/barthaleventegabor/
 * Licenc: MIT
 */
import { StyleSheet, Text, View } from "react-native";

function Footer() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Bartha Levente, 2026.03.10</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
    text:{
		fontSize: 24,
	}
});

export default Footer;
