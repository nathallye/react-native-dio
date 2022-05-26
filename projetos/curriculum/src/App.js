import React from 'react';
import { 
  SafeAreaView, 
  StatusBar, 
  View, 
  Image, 
  Text, 
  StyleSheet, 
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import avatar from './assets/nath.jpeg';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='dark-content' />
      <View style={styles.header}>
        <Image style={styles.avatar} source={avatar} />
        <Text style={styles.name}>NATHALLYE TAVARES</Text>
        <Text style={styles.occupation}>Software developer</Text>

        <View style={styles.socialMedia}>
          <Icon name='github' size={30} />
          <Icon name='linkedin' size={30} />
        </View>
      </View>

      <View>
        
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
    marginTop: 20,

    height: 250,
    width: 250,
    borderRadius: 125,
  },
  name: {
    marginTop: 10,

    fontSize: 26,
    fontWeight: 'bold',
  },
  occupation: {
    color: '#939393',
  },
  socialMedia: {
    marginTop: 20,

    justifyContent: 'space-between', 
    flexDirection: 'row',

    width: '20%',
  }
});

export default App;