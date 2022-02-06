import React from 'react';
import { FlatList,TouchableOpacity,View,Text } from 'react-native';
import styles from './styles'

var fruitsnveggies = [
  { item: "apples", id: 1},
  { item: "oranges", id: 2},
  { item: "carrots", id: 3},
  { item: "mango", id: 4},
  { item: "brocoli", id: 5},
  { item: "chillipowder", id: 6},
  { item: "onions", id: 7},
  { item: "ketchup", id: 8},
]

export default function App(props) {
  return (
  <View style={[{justifyContent: 'center',alignContent: 'center'}]}>
      {/* <FlatList
        keyExtractor={(ele)=>ele.id}
        data={fruitsnveggies} 
        renderItem={({item}) => (
        <View style={styles.item}>
          <Text onPress={()=> alert(item.item)} style={[{color:'red'}]}>{item.item} : {item.id}</Text>
        </View>
      )}
    /> */}
    <Text>name :{props.name} count:{props.count}</Text>
  </View> 
  )
}
