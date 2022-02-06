import React, {useState} from 'react';
import { View,Text } from 'react-native';
import { Button, Input } from 'react-native-elements'
import styles from './styles';
import { useNavigation } from '@react-navigation/native';


export default function Home() {
  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')
  const [img, setImg] = useState('')

  const navigation = useNavigation();

  const handleSubmit = () => {
    console.log(email,pwd);
    if (email.includes("@gmail.com") && pwd) {
      navigation.navigate("ProductCat", {email:email, pwd:pwd, img:img})
      // setEmail('')
      // setPwd('')
      // navigation.reset({
      //   index: 0,
      //   routes: [{ name: "ProductCat"}]
      // }, {email:email, pwd:pwd})
    } else {
      alert("invalid user or pwd")
    }
  }

  return (
    <View style={styles.container} >
      <Input 
        style={[{ alignItems: "center", alignContent: "center",}]}
        onChangeText={(text)=>setEmail(text)}
        placeholder="email"
        value={email}
        />
        <Input 
        onChangeText={(text)=>setPwd(text)}
        placeholder="pwd"
        value={pwd}
        secureTextEntry
        />
        <Input 
        onChangeText={(text)=>setImg(text)}
        placeholder="image url"
        value={img}
        />
        <Button title="submit" onPress={handleSubmit}/>
    </View>
  );
}
