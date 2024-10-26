import { router } from "expo-router";
import { SafeAreaView, ScrollView, Text, TouchableOpacity, StyleSheet, View } from "react-native";

export default function Page() {
  return <SafeAreaView style={{flex:1}}>
    <ScrollView style={{flex:1, padding:12}}>
      <TouchableOpacity style={styles.button} onPress={()=>{
      router.push('/single')
      }}>
        <Text style={styles.label}>🍔 단품 메뉴</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={()=>{
      router.push('/set-menu')
      }}>
        <Text style={styles.label}>🍟 세트 메뉴</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.label}>🥤 음료</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.label}>🧁 디저트</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.label}>💰 오늘의 할인</Text>
      </TouchableOpacity>
    </ScrollView>

    <View style={{padding:12}}>

    <TouchableOpacity style={[styles.button, {marginBottom: 0}]} onPress={()=>{
      router.push('/')
      }}>
      <Text style={styles.label}>🏠 처음으로</Text>
    </TouchableOpacity>

    </View>
  </SafeAreaView>
}

const styles = StyleSheet.create({
  button: {
      borderWidth: 1,
      borderColor: '#000',
      borderStyle: 'solid',
      padding: 20,
      marginBottom: 12,
  },
  label: {
      fontSize: 24,
  }
});