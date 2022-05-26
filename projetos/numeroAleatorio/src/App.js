import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, StatusBar} from 'react-native';

const App = () => {

  const [number, setNumber] = useState(0);

  function handleNumber() {
    const newNumber = Math.floor(Math.random() * 100);
    setNumber(newNumber);
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#FFE4E1'} barStyle='dark-content' />
      <View>
        <Text style={styles.number}>{number}</Text>
        <TouchableOpacity style={styles.button} onPress={handleNumber}>
          <Text>Gerar número</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFE4E1',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    fontSize: 38,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#D8BFD8',
    justifyContent: 'center',
    alignItems: 'center',

    width: '80%',
    marginTop: 10,
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 5, 
  },
});

export default App;