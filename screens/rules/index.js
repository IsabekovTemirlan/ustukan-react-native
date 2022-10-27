import React from 'react'
import { StyleSheet, Text, View, Button, Image, Dimensions, ScrollView, FlatList } from 'react-native';
import { itemsObjects } from '../game/config.js';
const screenWidth = Dimensions.get('window')?.width;

export default () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title_text}>
          УСТУКАН ТАРТУУ
        </Text>
        <Text style={styles.text}>
          Устукандарды ар бир табакка бөлүү – табак тартуу деп аталат. Ар бир табакка жиликтер бөлүнүп, үй ээси келген меймандардын санына жараша 7, 9 же 11 кишиден кылып табакка отургузат. Кыргызстандын айрым жерлеринде 4, 5 же 6 кишиден деле бир табакка отургузула берет. Табак коноктун санына, статусуна жараша тартылат. Тактап айтканда, жогорку (улуу) табак, ортончу (экинчи) же кичүү табак делип бөлүнөт. Жогорку табак куда-сөөктүн аксакалдарына, сый конокторго тартылат.
        </Text>

        <Text style={{ ...styles.title_text, marginBottom: 10 }}>
          КОНОКТОРГО ТАРТЫЛЧУ УСТУКАНДАРДЫН ИРЕТИ
        </Text>

        <View style={styles.text_wrap}>
          <Image source={itemsObjects[0].img} style={{ width: 70, height: 100, marginRight: 10 }} />
          <Text style={styles.text}>
            Жамбаш – койдун жумшак, ширелүү эти жана жетиштүү майы бар жамбаш сөөгү. Коноктордун сакалдуусуна тартылат жана эң улуу устукан болуп эсептелет (эркекке да, аялга да тартса болот).
          </Text>
        </View>
        <View style={styles.text_wrap}>
          <Image source={itemsObjects[1].img} style={{ width: 50, height: 100, marginRight: 10 }} />
          <Text style={styles.text}>
            Жото жилик – чүкөлүү жилик. Улуктугу жагынан экинчи турган мейманга аял-эркек дебей тартылат.
          </Text>
        </View>
        <View style={styles.text_wrap}>
          <Image source={itemsObjects[2].img} style={{ width: 60, height: 100, marginRight: 10 }} />
          <Text style={styles.text}>
            Кашка жилик – эти көп жилик. Улуктугу жагынан үчүнчү устукан. Аялга да, эркекке да тартыла берет.
          </Text>
        </View>
        <View style={styles.text_wrap}>
          <Image source={itemsObjects[3].img} style={{ width: 60, height: 100, marginRight: 10 }} />
          <Text style={styles.text}>
            Кар жилик – кашка жиликтен кийин келген сыйлуу устукандардын бири. Улуктугу жагынан төртүнчү турат. Эркек кишиге гана тартылчу устукан.
          </Text>
        </View>
        <View style={styles.text_wrap}>
          <Image source={itemsObjects[4].img} style={{ width: 60, height: 100, marginRight: 10 }} />
          <Text style={styles.text}>
            Далы – кашка жиликтен кийин турган устукан. Аял-эркекке бирдей тартыла берет. Илгери кыргыздар далы менен төлгө тартып, кийинки жылдын аба ырайын жана болчу түшүмдү алдын ала айтышкан.
          </Text>
        </View>
        <View style={styles.text_wrap}>
          <Image source={itemsObjects[5].img} style={{ width: 60, height: 100, marginRight: 10 }} />
          <Text style={styles.text}>
            Карчыганын кабыргалары – кичүү меймандарга же башка устуканга кошумча катары тартылышы мүмкүн. Көбүнчө арка сөөккө кошуп дасторкондун этек жагында отурган жаштарга тартышат.
          </Text>
        </View>
        <View style={styles.text_wrap}>
          <Image source={itemsObjects[8].img} style={{ width: 60, height: 100, marginRight: 10 }} />
          <Text style={styles.text}>
            Күң жилик – бул жиликтин эти өтө даамдуу болгону менен, аталышынан улам устукан катары тартышпайт. Келиндерге, көпчүлүк учурда кичүүсүнө берилчү устукан, эркектер жебейт. Табакка тартылбайт.
          </Text>
        </View>
        <View style={styles.text_wrap}>
          <Image source={itemsObjects[7].img} style={{ width: 90, height: 50, marginTop: 30, transform: [{ rotate: '90deg' }] }} />
          <Text style={styles.text}>
            Баш – Башты күйөө балага тартпайт. Карчыганын кабыргасы, кар жилик же кашка жилик менен кошуп тартса болот. Чүй, Талас облустарында жана түштүк аймактарда башты меймандардын сакалдуусуна тартат. Ал эми Ысык-Көл менен Нарында бул жаштарга тиешелүү устукан.
          </Text>
        </View>
        <View style={styles.text_wrap}>
          <Image source={itemsObjects[9].img} style={{ width: 100, height: 100, marginRight: 10 }} />
          <Text style={styles.text}>
            Куйрук – Аял кишиге тартыла турчу сыйлуу устукан. Куйрукту алган аял анын майынын жартысын тилип, дасторкондо отургандарга таратуусу туура этика болуп саналат.
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  text: {
    marginBottom: 10,
  },
  title_text: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  text_wrap: { flexDirection: 'row', width: screenWidth - 140, marginBottom: 10 }
});
