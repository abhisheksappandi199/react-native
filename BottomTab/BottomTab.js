import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Default from './Default'
import Axios from './Axios'
import Redux from './Redux';

const Tab = createBottomTabNavigator()

export default function BottomTab() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Default" component={Default} />
      <Tab.Screen name="Axios" component={Axios} />
      <Tab.Screen name="Redux" component={Redux} />
    </Tab.Navigator>
  )
}
