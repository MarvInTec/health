import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Linking } from 'react-native';


export default function FooterImc() {

  return (
    <View style={styles.rodape}>

      <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/marcus_simoes86/')}>
        <Image style={{ borderRadius:6, width: 30, height: 30 }} source={require('../../assets/insta.png')} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/marcusviniciussimoes/')}>
        <Image style={{ width: 80, height: 80 }} source={require('../../assets/linkedin.png')} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Linking.openURL('https://web.whatsapp.com/')}>
        <Image style={{ width: 30, height: 30 }} source={require('../../assets/zap.png')} />
      </TouchableOpacity>

      <Text>{`\n @Desenvolvido por Marcus Vinicius`}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  rodape: {
    height:200,
    backgroundColor: '#8B7355',
    alignItems: 'center',
    justifyContent: 'center',
    // flexDirection: 'row',
  },
});