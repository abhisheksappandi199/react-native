import React, {useState} from 'react';
import { View,Text,FlatList,TouchableOpacity } from 'react-native';
import axios from 'axios';
import styles from '../styles';

export default function Axios() {
  const [data, setData] = useState(null)

  const employees =  [
    { id: 1, name: 'arjun', email: 'arjun@gmail', gender: 'male', department: 'tech' },
    { id: 2, name: 'sruthi', email: 'sruthi@gmail', gender: 'female', department: 'tech' },
    { id: 3, name: 'deepa', email: 'deepa@gmail', gender: 'female', department: 'hr' },
    { id: 4, name: 'jobin', email: 'jobin@gmail', gender: 'male', department: 'facility' },
  ]

  React.useEffect(() => {
    axios.get('http://jsonplaceholder.typicode.com/users')
    .then((response)=>{
        const data = response.data 
        console.log("data",data);
        data &&  setData(response.data)
    })
    .catch((error)=>
   {
      console.log(error.message);
   })
  }, []);
  

  return (
    <View style={styles.container}>
      {/* {employees && employees.length > 0 && (
          <View>
            <Text>No of employees: {employees.length}</Text>
            <table border="1">
            <thead>
                <tr>
                    <th> <Text>#</Text> </th>
                    <th> <Text>name</Text> </th>
                </tr>
            </thead>
            <tbody>
                {employees.map(function (emp) {
                    return (
                        <tr key={emp.id}>
                            <td> <Text>{emp.id}</Text> </td>
                            <td> <button> <Text>remove</Text> </button> </td> 
                        </tr>
                    )
                })}
            </tbody>
        </table>
          </View>
      )} */}
      {data && data.length > 0 && (
          <View>
            <Text>No of Users: {data.length}</Text>
            <FlatList
            keyExtractor={(ele) => ele.id}
            data={data}
            renderItem={({ item }) => (
              <View>
                <TouchableOpacity onPress={() => alert(item.phone)}><Text style={[{ color: "brown" }]}>{item.id}. {item.name} : {item.website}</Text></TouchableOpacity>
              </View>
            )}
          />
          </View>
      )}
    </View>
  )
}