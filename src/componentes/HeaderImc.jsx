import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HeaderImc() {
    return (
        <View style={styles.cabecalho}>
            <Text style={styles.text}>"Soul Health"</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    cabecalho: {
        height: 200,
        backgroundColor: '#8B6914',
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        color: '#000',
        fontSize: 40,
        fontWeight: 'bold'
    },
});