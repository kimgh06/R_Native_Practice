import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [datas, setDatas] = useState(null);
  async function getnutritions() {
    await axios.get(`http://openapi.foodsafetykorea.go.kr/api/9aa3bd11f23949c78169/I2790/json/0/20/DESC_KOR=죽`).then(e => {
      let list = []
      e.data.I2790.row.forEach(data => {
        let hundred = data['SERVING_SIZE'] / 100;
        if (hundred <= 0) hundred = 1
        list.push({ ...data, hundred })
      })
      setDatas(list);
      console.log("loaded")
    }).catch(e => {
      console.log(e);
    })
  }
  useEffect(e => {
    console.log("hello");
    getnutritions();
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{
        fontSize: 30,
        textAlign: 'center'
      }}>죽 입니다.</Text>
      <ScrollView>
        {/* <Text style={styles.Text}>Open up App.js to start our asdfpp!?</Text> */}
        {datas ? datas.map((i, n) => {
          if (i?.["NUTR_CONT1"] && i?.["NUTR_CONT2"]) {
            return <View style={styles.TextView} key={n}>
              <Text style={styles.HeaderText}>{i["DESC_KOR"]}</Text>
              {i?.["MARKER_NAME"] && <Text>{i?.["MARKER_NAME"]}</Text>}
              {i?.["SERVING_SIZE"] && <Text>총 무게: {i?.["SERVING_SIZE"]}g</Text>}
              {i?.["NUTR_CONT1"] && <Text>열량: {i?.["NUTR_CONT1"]}kcal</Text>}
              {i?.["NUTR_CONT2"] && <Text>탄수화물: {i?.["NUTR_CONT2"]}g</Text>}
              {i?.["NUTR_CONT3"] && <Text>단백질: {i?.["NUTR_CONT3"]}g</Text>}
              {i?.["NUTR_CONT4"] && <Text>당류: {i?.["NUTR_CONT4"]}g</Text>}
              {i?.["NUTR_CONT5"] && <Text>나트륨: {i?.["NUTR_CONT5"]}mg</Text>}
              {i?.["NUTR_CONT6"] && <Text>콜레스테롤: {i?.["NUTR_CONT6"]}g</Text>}
              {i?.["NUTR_CONT7"] && <Text>포화지방산: {i?.["NUTR_CONT7"]}g</Text>}
              {i?.["NUTR_CONT8"] && <Text>트랜스지방: {i?.["NUTR_CONT8"]}mg</Text>}
            </View>
          }
        }
        ) : <Text>no datas</Text>}
        <StatusBar style={styles.statusbar} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  TextView: {
    padding: 10,
    width: 400
  },
  Text: {
    fontWeight: 'bold'
  },
  HeaderText: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold'
  }
});
