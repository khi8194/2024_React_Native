import { router, useLocalSearchParams } from "expo-router";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import WebView from "react-native-webview";

/*
// export default function Page() {
//   const { vid } = useLocalSearchParams();
//   return <SafeAreaView>
//       <Text>
//         { vid }
//       </Text>
//   </SafeAreaView>
// }
*/
export default function Page() {
  const { vid } = useLocalSearchParams();

  return <SafeAreaView style = {{ flex:1 }}>

    <View style = {{ width:'100%', aspectRatio: 16/9 }}>

      <WebView
        source = {{ uri: `https://www.youtube.com/embed/${vid}`}}
        style = {{ flex:1 }}
      />

    </View>

    <TouchableOpacity style={[styles.button, { flex: 1 }]} 
      onPress={()=>{router.push('/single')}}>
        <Text style={styles.label}>🔙 이전 메뉴</Text>
    </TouchableOpacity>
      
    
  </SafeAreaView>
}

const styles = StyleSheet.create({
  button: {
      borderWidth: 1,
      borderColor: '#000',
      borderStyle: 'solid',
      padding: 20,
  },
  label: {
      fontSize: 24,
  }
});