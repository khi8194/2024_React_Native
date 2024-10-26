import { Link, router } from "expo-router";
import { SafeAreaView, Text, View, TouchableOpacity } from "react-native";

/*
// export default function Page() {
//   return <View>
//     <Text>주문하시려면 화면을 터치하세요.</Text>
//   </View>
// }
*/
/*
// export default function Page() {
//   return <SafeAreaView style={{
//     backgroundColor:'#ff888f'
//     ,flex:1
//     ,justifyContent:'center'
//     ,alignItems:'center'
//   }}>
//     <Link href={'/category'}> 
//       <View style={{
//         width:'100%', height:'100%'
//         , justifyContent:'center', alignItems:'center'
//       }}>
//         <Text style={{fontSize:20}}>주문하시려면 화면을 터치하세요.</Text>
//       </View>
//     </Link>
//   </SafeAreaView>
// }
*/
// Link 태그나 Router push나 앱에서는 동일하게 발생 (상황에 따라 선택하면 됨)
export default function Page() {
  return <SafeAreaView style={{
    backgroundColor:'#ff888f'
    ,flex:1
    ,justifyContent:'center'
    ,alignItems:'center'
  }}>
    <TouchableOpacity onPress={()=>{
      //dynamic navigate, programable navigate
      router.push('/category')
    }}style={{ width: '100%' }}>
      <View style={{
        width:'100%', height:'100%'
        , justifyContent:'center', alignItems:'center'
      }}>
        <Text style={{fontSize:20}}>주문하시려면 화면을 터치하세요.</Text>
      </View>
    </TouchableOpacity>
  </SafeAreaView>
}