import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Image} from 'react-native-elements'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import ProductCat from './ProductCat';
import Basic from './Basic';

const Stack = createNativeStackNavigator()
// options={{ headerShown: false}}/>
// options={{title:"Home",headerBackVisible:false}}
export default function App({ route }) {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerStyle: {backgroundColor: "yellow"}, headerTintColor: "grey"}}>
      <Stack.Screen name="Home" component={Home} options={{title:"Login"}}/> 
      <Stack.Screen name="ProductCat" component={ProductCat} options={({route}) => ({
        title: route.params.email,
        headerLeft: () => (
          <Image 
            source={{ uri: route.params.img }}
            style={{ height: 40, width: 40 }}
            />
        ),
        headerBackVisible:false
      })}/>
      <Stack.Screen name="Basic" component={Basic} options={{title:"basics of native", headerBackTitle: "Home", headerTitleAlign: "left",headerTitleStyle: {color: "brown"}}}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
