import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Loading() {
    return (
    <View style={styles.main_container}>
        <Text style={styles.text}>Getting the weather</Text>
    </View>);
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: '#FDF6AA',
        paddingHorizontal: 30,
        paddingVertical: 80
    },
    text : {
        color: "#2c2c2c",
        fontSize: 50
    }
});