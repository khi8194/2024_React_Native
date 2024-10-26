import { ListItemType } from "@/types";
import { router } from "expo-router";
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// type 

const LIST: ListItemType[] = [
  {
    key:'1955',
    name: '1955버거',
    // link: 'burger-1955'
    vid: 'burger-1955'
  },
  {
    key:'bid-mc',
    name: '빅맥',
    // link: 'bid-mc'
    vid: 'big-mc',
  },
]

export default function Page() {
    return <SafeAreaView style={{flex:1}}>
      <FlatList 
        data={LIST}
        renderItem={Item}
        style={{flex:1}}
      />

      <View style={{ padding: 12, flexDirection: 'row', gap: 12 }}>
        <TouchableOpacity style={[styles.button, { marginBottom: 0, flex: 1 }]} onPress={()=>{router.push('/category')}}>
            <Text style={styles.label}>🔙 이전 메뉴</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { marginBottom: 0, flex: 1 }]} onPress={()=>{router.push('/')}}>
            <Text style={styles.label}>🏠 처음으로</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
}

/*
// function Item({item}:any) {
//   return <View>
//     <Text>{item.name}</Text>
//   </View>
// }*/
function Item({ item }: { item: ListItemType } ) {
  return <View>
      <Text>{item.name}</Text>
  </View>
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