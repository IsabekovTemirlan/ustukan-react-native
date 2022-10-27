import React, { useState } from 'react';
import Draggable from 'react-native-draggable';
import { Button, StyleSheet, Text, View, Alert, Image } from 'react-native';
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
    const errors = [];
    items.forEach((i) => {
      if (!i?.personId) return;
      const person = persons.find(p => p.id === i.personId);
      if (!person?.posibleItems?.includes(i.id)) errors.push(`${i.text} - ${person.title}`);
    });
    if (errors.length) Alert.alert('Cиз Утулдуңуз!', ['Туурам эмес тартуулар: \n', ...errors].join('\n'));
    else Alert.alert('Сиз жеңдиңиз!');
  }

  const onPressPerson = (person) => {
    const selectedItems = items.filter((i) => i?.personId === person.id);
    Alert.alert(
      person.title,
      selectedItems?.map((e) => e.text).join('\n') || 'Табак бош'
    );
  }

  const scaleHeight = ({ source, desiredWidth }) => {
    const img = Image.resolveAssetSource(source);
    if (img?.height && img?.width) return desiredWidth / width * height;
    return 50;
}

const imageWidth = 56;
const images = items.map(i => `../../assets/images/bash.png`);

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
      {items?.map((item) => {
        const imageHeigh = scaleHeight({
          source: item,
          desiredWidth: imageWidth
        });
        return (
          <Draggable
            key={item.id}
            id={item.id}
            x={item.x} y={item.y}
            renderSize={56}
            isCircle
            shouldReverse
            touchableOpacityProps={{ activeOpactiy: .5 }}
            onDragRelease={(_, event) => onRelease(event)}
            onPressOut={() => setCurrent(item.id)}
          >
            <Image
              source={item.img}
              style={{
                width: imageWidth,
                height: imageHeigh
              }}
            />
            <Text style={{width: 60, textAlign: 'center', fontSize: 11, color: '#fff', }}>{item.text}</Text>
          </Draggable>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCDCDD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  person: {
    position: 'absolute',
    backgroundColor: '#4C5C68',
    padding: 5,
    borderRadius: 10,
    height: 90,
    width: 70,
  },
  person_title: {
    textAlign: 'center',
    color: '#fff'
  },
  center: {
    borderRadius: 50,
    backgroundColor: "#46494C",
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
