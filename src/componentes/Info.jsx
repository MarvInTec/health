import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Info(props) {

    return (
        <View style={styles.info}>
            <Text>{props.titulo}</Text>
            <Text>{props.autor}</Text>
            <Text>{props.conteudo}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    info: {
        backgroundColor: '#FFE7BA',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});