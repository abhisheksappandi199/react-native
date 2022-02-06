

import React, { Component,useState } from 'react';  
import { Pressable, SectionList, StyleSheet, Text, View } from 'react-native';  
  
export default function SectionListCmp() {
  const [count,setCount] = useState(0) 
 // pressable is used to track pressed and removed
  return (  
      <View style={styles.container}>  
          <SectionList  
              sections={[  
                  {title: 'A', data: ['ALTERED','ABBY']},  
                  {title: 'B', data: ['BEST MEN','BEYOND JUSTICE']},  
                  {title: 'C', data: ['CARTEL', 'CASTLE OF EVIL']},  
              ]}  
              renderItem={({item}) => <Text style={styles.item}>{item}</Text>}  
              renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}  
              keyExtractor={(item, index) => index}  
          />  
          <Pressable>
              <Text style={({pressed})=>[{backgroundColor: pressed ? "red" : "white"}]} onPress={()=>setCount(count+1)}>click me : {count}</Text>
          </Pressable>
      </View>  
  );
}
  const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        backgroundColor: "#5ead97"  
    },  
    sectionHeader: {  
        paddingTop: 2,  
        paddingLeft: 10,  
        paddingRight: 10,  
        paddingBottom: 2,  
        fontSize: 22,  
        fontWeight: 'bold',  
        color: "#fff",  
        backgroundColor: '#8fb1aa',  
    },  
    item: {  
        padding: 10,  
        fontSize: 18,  
        height: 44,  
    }  
}) 

  
