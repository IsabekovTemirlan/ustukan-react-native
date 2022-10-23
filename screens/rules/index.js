import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

export default () => {
  return (
    <View style={styles.container}>
      <Text>
        lorem impsum loremaks
      </Text>
      <Text>
        lorem impsum loremaksdjfksjfksdjfkj skdjfskfj skdjfksjf
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 10
  },
  title: {
    position: 'absolute',
    top: 100
  },
  title_text: {
    fontSize: 30,
    fontWeight: 'bold'
  },
});
