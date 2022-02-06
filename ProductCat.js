import React from 'react';
import { View,Text, Alert,Image } from 'react-native';
import { Button } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native'
import BottomTab from './BottomTab/BottomTab'

export default function ProductCat() {
  const navigation = useNavigation();
  const route = useRoute();

  const handleUpdate = () => {
    Alert.prompt("update picture","enter new rui for the pic", [
      {
        title: "update",
        onPress: (text) => {
          navigation.setOptions({
            headerLeft: () => (
              <Image
                source={{ uri: text }}
                style={{ height: 40, width: 40 }}
              />
            )
          })
        }
      }
    ])
  }

  return (
    <View>
      <Text style={[{ margin: 10, justifyContent: "center" }]}>Welcome {route.params.email}...!</Text>
      <Button title="update Profile Pic"
        onPress={()=>handleUpdate()}
        />
      <Button title="go to Basic"
        onPress={()=>navigation.navigate("Basic")}
        />
        <NavigationContainer>
        <BottomTab />
        </NavigationContainer>

    </View>
  )
}
