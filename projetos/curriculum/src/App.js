import React from 'react';
import { 
  SafeAreaView, 
  StatusBar, 
  View, 
  Image, 
  Text, 
  StyleSheet,
  Alert,
  TouchableOpacity, 
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import avatar from './assets/nath.jpeg';

const App = () => {

  function handleSocialMedia(social_media) {

    switch(social_media) {
      case 'linkedin':
        Alert.alert('Meu LinkedIn:', 'https://www.linkedin.com/in/nathallye-tavares-62092a178/')
      break;
      case 'github':
        Alert.alert('Meu Github:', 'https://github.com/nathallyet')
      break;
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#E7E7E7'} barStyle='dark-content' />
      <View style={styles.header}>
        <Image style={styles.avatar} source={avatar} />
        <Text style={styles.name}>NATHALLYE TAVARES</Text>
        <Text style={styles.occupation}>Software developer</Text>

        <View style={styles.socialMedia}>
          <TouchableOpacity onPress={() => handleSocialMedia('linkedin')}>
            <Icon name='linkedin' size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSocialMedia('github')}>
            <Icon name='github' size={30} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.containerCard}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text 
            style={styles.cardHeaderText}>
            Formação Acadêmica
            </Text>
          </View>
          <View style={styles.cardContent}>
            <Text 
              style={styles.cardContentText}>
              ▪	Graduanda em Análise e Desenvolvimento de Sistemas - Conclusão 2024;
            </Text>
            <Text 
              style={styles.cardContentText}>
              ▪	Graduanda em Ciência da Computação - Conclusão 2026;
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.containerCard}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text 
            style={styles.cardHeaderText}>
            Experiência Profissional
            </Text>
          </View>
          <View style={styles.cardContent}>
            <Text 
              style={styles.cardContentText}>
              ▪	Desenvolvedora de Software na empresa OrçaFascio - Janeiro/2022-Até o momento;
            </Text>
            <Text 
              style={styles.cardContentText}>
              ▪ Analista de Produto na empresa OrçaFascio - Junho/2021-Outubro/2021;
            </Text>
            <Text 
              style={styles.cardContentText}>
              ▪ Analista de Suporte e Implementação na empresa OrçaFascio - Agosto/2020-Maio/2021;
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E7E7E7',
    flex: 1,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    marginTop: 15,

    height: 200,
    width: 200,
    borderRadius: 105,
  },
  name: {
    marginTop: 10,

    fontSize: 24,
    fontWeight: 'bold',
  },
  occupation: {
    color: '#939393',
  },
  socialMedia: {
    marginTop: 15,

    justifyContent: 'space-between', 
    flexDirection: 'row',

    width: '20%',
  },
  containerCard: {
    marginTop: 15,

    alignItems: 'center',
  },
  card: {
    backgroundColor: '#FFF',

    borderWidth: 1,
    borderColor: '#939393',
    borderRadius: 5,
    width: '80%',
    padding: 10,
  },
  cardHeader: {
    alignItems: 'center',
  },
  cardHeaderText: {
    fontWeight: 'bold',
  },
  cardContent: {
    marginTop: 20,
  },
  cardContentText: {
    color: '#939393',
    alignItems: 'flex-start',

    marginBottom: 5,
  }
});

export default App;