import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { RefreshControl, ScrollView, ActivityIndicator, Switch, Modal, TouchableWithoutFeedback, Text, View, Button, TextInput, FlatList, TouchableOpacity, Alert, Keyboard } from "react-native";
import styles from "./styles"
import Fruits from "./Fruits"
import SectionListCmp from './SectionListCmp'

const fruitsnveggies = [
  { item: "apples", id: 1 },
  { item: "oranges", id: 2 },
  { item: "carrots", id: 3 },
  { item: "mango", id: 4 },
  { item: "brocoli", id: 5 },
  { item: "chillipowder", id: 6 },
  { item: "onions", id: 7 },
  { item: "ketchup", id: 8 },
]

export default function Basic() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isScroll, setIsScroll] = useState(false)
  const [basic, setBasic] = useState(true)
  const [refresh, setRefresh] = useState(false)

  /// DrawerLayoutAndriod is used as hamberger
  /// platformcolor is used to give color 
  /// platform is used to determine OS, version and other details
  /// Appearence.getColorScheme() is used during light and dark mode
  /// ToastAndriod is used for toast notification in andriod onlt
  /// ScrollView is used to scroll the list
  /// <Image source={} /> 
  /// TouchableWitoutFeedback kayboard.dismiss() ==> is used to dismiss the keybpoard on click outside, 2.ripple effect is present only in android
  /// InputAccessoryView is used to clear the text which come above keyboard only IOS
  const handleSubmit = () => {
    Alert.alert("Hi", `are you sure want to submit ${name}`, [
      { text: "yes", onPress: () => console.log("clicked") },
      { text: "no", onPress: () => setName(null) }
    ])
  }

  const Pullme = () => {
    setRefresh(true)

    setTimeout(() => {
      setRefresh(false)
    }, 1000);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        <Button style={styles.tab} onPress={() => setBasic(!basic)} title="basic"></Button>
      </Text>
      {
        basic ? (
          <View>
          <Text style={styles.name}>the count is : {count}</Text>
          <ActivityIndicator size="small" />
          <Text style={styles.wrapper}>
            <Button onPress={() => setCount(count + 1)} title="+"></Button>
            <Button onPress={() => setCount(0)} title="reset"></Button>
            <Button onPress={() => setCount(count - 1)} title="-"></Button>
            <Button onPress={() => Alert.alert("hi...!", "you are awesome")} title="alert"></Button>
          </Text>
          <Switch
            trackColor={{ true: "green", false: "red" }}
            thumbColor={isScroll ? "yelow" : "pink"}
            ios_backgroundColor="red"
            onValueChange={() => setIsScroll(prev => !prev)}
            value={isScroll}
          /><Text>{isScroll ? "yes" : "no"}</Text>
          <Text onPress={() => setIsVisible(!isVisible)}>Modal click me</Text>
          
          <Modal visible={isVisible}>
            <View style={styles.container}>
              <Text style={styles.name} onPress={() => setIsVisible(!isVisible)}>close the modal</Text>
              <SectionListCmp />
            </View>
          </Modal>
    
          <View style={styles.wrapper}>
            <Text>Enter your name : {name}</Text>
            <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}><TextInput style={styles.input} onChangeText={(text) => setName(text)} keyboardType="numeric" /></TouchableWithoutFeedback>
            <Button title="submit" onPress={() => handleSubmit()} />
          </View>
    
          <Fruits name={name} count={count} />
    
          <FlatList
            style={[{ height: "10%" }]}
            keyExtractor={(ele) => ele.id}
            data={fruitsnveggies}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <TouchableOpacity onPress={() => alert(item.item)}><Text style={[{ color: "red" }]}>{item.item} : {item.id}</Text></TouchableOpacity>
              </View>
            )}
          />
          </View>
        ) : (
          <View style={styles.container}>
            <ScrollView
              refreshControl={
                <RefreshControl
                  refreshing={refresh}
                  onRefresh={()=>{Pullme()}}
                />
              }
              />
          </View>
        )
      }

    </View>
  );
}


