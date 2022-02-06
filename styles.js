import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  name: {
    marginTop: '10%',
    marginLeft: '2%',
    fontWeight: 'bold',
    fontSize: 24,
    justifyContent: 'flex-start',
    alignContent: 'flex-start'
  },
  wrapper: {
    justifyContent: 'center',
  },
  input: {
    width: 200,
    height: 20,
    borderColor: 'black',
    borderWidth: 1,
    margin: 10
  },
  item: {
    width: '100%',
    marginBottom: 10,
    paddingLeft: 20,
    backgroundColor: 'yellow'
  },
  tab : {
    fontSize: 24,
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    color: "red",
  },
  header : {
    marginTop: 50
  }
});

export default styles