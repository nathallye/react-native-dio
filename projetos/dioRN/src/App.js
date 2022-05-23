import React from 'react';
import { 
  StyleSheet, 
  View, 
  Image, 
  Text, 
  SafeAreaView, 
  StatusBar,
  Pressable,
  Linking,
} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';

const imageProfileGithub = 'https://avatars.githubusercontent.com/u/86172286?v=4';

const urlToMyGithut = 'https://github.com/nathallyet';

const App = () => {

  const handlePressGoToGithub = async () => {
    console.log('Verificando link...');
    const res = await Linking.canOpenURL(urlToMyGithut); // primeiro vai perguntar se ele consegue,abrir essa url, portando vai ser uma função assincrona, que vai resperar por um resultado, e isso vai retornar uma promisse boleano
    if (res) { // verifica se a resposta for true
      console.log('Link aprovado!');
      await Linking.openURL(urlToMyGithut); // vai abrir a url do github
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colorGithub} barStyle='light-content' />
      <View style={styles.content}>
        <Image 
          accessibilityLabel='Nathallye Tavares no escritório'
          style={styles.avatar} 
          source={{uri: imageProfileGithub}}
        />
        <Text 
          accessibilityLabel='Nome: Nathallye Tavares' 
          style={[styles.defaultText, styles.name]}>
          Nathallye Tavares
        </Text>
        <Text 
          accessibilityLabel='Nickname: nathallyet' 
          style={[styles.defaultText, styles.nickname]}>
          nathallyet
        </Text>
        <Text 
          accessibilityLabel='Descrição Nathallye Tavares: Software developer'
          style={[styles.defaultText, styles.description]}>
          Software developer
        </Text>
        <Pressable onPress={handlePressGoToGithub}>
          <View style={styles.button}>
            <Text style={[styles.defaultText, styles.textButton]}>Open in Github</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: { // column, se quisermos alterar esse comportamento para alinhamento em linha, devemos usar:
    // flexDirection: 'row', 
    backgroundColor: colorGithub,
    flex: 1,
    justifyContent: 'center',

  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    height: 200, // valor em px
    width: 200,
    
    borderRadius: 100, // valor em px (100 equivale a metade dos pixels da imagem que é 200, é o mesmo de 50%)
    borderColor: 'white',
    borderWidth: 2,
  },
  defaultText: {
    color: colorFontGithub,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 24,

    marginTop: 20,
  },
  nickname: {
    color: colorDarkFontGithub,
    fontSize: 18,    
  },
  description: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  button: {
    backgroundColor: colorDarkFontGithub,
    
    marginTop: 20,
    padding: 10,
    
    borderRadius: 10,
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 16,
  }
});

export default App;