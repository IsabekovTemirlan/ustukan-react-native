import React from 'react'
import { useState } from 'react';
import Draggable from 'react-native-draggable';
import { Button, StyleSheet, Text, View, Alert } from 'react-native';
import { getRundomItemsFromArray, isNear } from './utils';
import { itemsObjects, persons as personsObjects } from '../game/config';

export default ({ route: { params } }) => {
  const [current, setCurrent] = useState(false);
  const [items, setItems] = useState(params?.items || []);
  const [persons, setPersons] = useState(params?.persons || []);

  const onRelease = (event) => {
    const item = { id: current, x: event.moveX, y: event.moveY - 140 }
    persons.forEach((person) => {
      if (isNear(person, item)) {
        setItems([...items.map(i => {
          if (i.id === item.id) return {
              ...i,
              x: person.x + 6,
              y: person.y + 25,
              personId: person.id
            }
          return i;
        })]);
        return;
      }
    });
    setCurrent(false);
  }

  const onRest = () => {
    const newPersons = getRundomItemsFromArray(personsObjects);
    const newItems = getRundomItemsFromArray(itemsObjects, newPersons.length);
    setItems(newItems);
    setPersons(newPersons);
  }

  const onApply = () => {
    Alert.alert('Сиз жеңдиңиз!');
  }

  const onPressPerson = (person) => {
    const selectedItems = items.filter((i) => i?.personId === person.id);
    Alert.alert(
      person.title,
      selectedItems?.map((e) => e.text).join('\n') || 'Табак бош'
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.reset} >
        <View style={styles.btn_wrap}>
          <Button title='Жаңыртуу' onPress={onRest} />
        </View>
        <View style={styles.btn_wrap}>
          <Button title='Tекшерүү' onPress={onApply} />
        </View>
      </View>
      {persons?.map(person => <View key={person.title} style={{ ...styles.person, left: person.x, top: person.y }}>
        <Text onPress={() => onPressPerson(person)} style={styles.person_title}>{person.title}</Text>
      </View>)}
      <View style={styles.center}></View>
      {items?.map(item => (
        <Draggable
          key={item.id}
          id={item.id}
          x={item.x} y={item.y}
          renderSize={56}
          renderColor='#ed553b'
          debug={false}
          renderText={item.text}
          isCircle
          shouldReverse
          touchableOpacityProps={{ activeOpactiy: .5 }}
          onDragRelease={(_, event) => onRelease(event)}
          onPressOut={() => setCurrent(item.id)}
        />
      ))}
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
  person: {
    position: 'absolute',
    backgroundColor: '#ccc',
    padding: 5,
    borderRadius: 10,
    height: 90,
    width: 70,
  },
  person_title: {
    textAlign: 'center'
  },
  center: {
    borderRadius: 50,
    backgroundColor: "#20639b",
    width: 220,
    height: 240
  },
  reset: {
    position: 'absolute',
    top: 60,
    display: 'flex',
    flexDirection: 'row'
  },
  btn_wrap: {
    margin: 5,
  },
});
