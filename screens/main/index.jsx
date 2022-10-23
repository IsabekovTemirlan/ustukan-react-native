import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { itemsObjects, persons as personsObjects } from '../game/config';
import { getRundomItemsFromArray } from '../game/utils';
const screenWidth = Dimensions.get('window')?.width;

export default ({ navigation }) => {

  const onNewGame = () => {
    const persons = getRundomItemsFromArray(personsObjects);
    const items = getRundomItemsFromArray(itemsObjects, persons.length - 1);
    navigation.navigate('Жаңы оюн', { persons, items });
  }

  return (
    <View style={styles.container}>
      <View style={styles.title}><Text style={styles.title_text}>УСТУКАН</Text></View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity style={styles.btn_wrap} onPress={onNewGame}>
          <Text style={styles.btn}>Жаңы оюн</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn_wrap} onPress={() => navigation.navigate('Эрежелер')}>
          <Text style={styles.btn}>Эрежелер</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9f4ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    position: 'absolute',
    top: 100
  },
  title_text: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#009688'
  },
  btn_wrap: {
    width: screenWidth - 50,
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 15
  },
  btn: {
    fontSize: 16,
    padding: 5,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});
