import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View,Image } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.avatar_container}>
          <Image style={styles.avatar_image} source = {require("./assets/batman-avatar.png")} />
          <Text style={styles.avatar_text}>"It's not who I am underneath, but what I do that defines me"</Text>
      </View>
      <View style={styles.details_container}>
          <View style={styles.details_item}>
              <Text style={styles.label}>Name:</Text>
              <Text style={styles.data}>Batman</Text>
          </View>
          <View style={styles.details_item}>
              <Text style={styles.label}>City:</Text>
              <Text style={styles.data}>Gotham</Text>
          </View>
          <View style={styles.details_item}>
              <Text style={styles.label}>Fav Color:</Text>
              <Text style={styles.data}>Black</Text>
          </View>
          <View style={styles.details_item}>
              <Text style={styles.label}>Job:</Text>
              <Text style={styles.data}>Batting</Text>
          </View>
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  avatar_container:{
    flex:0.4,
    justifyContent:'center',
    alignItems :'center',
    backgroundColor:'wheat',
    borderBottomColor:'black',
    borderBottomWidth:1,
  },
  avatar_image: {
    marginBottom:10,
  },
  avatar_text : {
    textAlign:'center',
    width : 300,
    fontSize:20,
    fontWeight:'bold'
  },
  details_container:{
    flex:0.6,
   
  },
  details_item:{
    flex:0.25,
    flexDirection:'row',
    borderBottomColor:'black',
    borderBottomWidth:1,
    paddingHorizontal :20,
    alignItems:'center'
  },
  label:{
    fontWeight:'bold',
    flex:1,
    color:'orange',
    fontSize:32,
  },
  data:{
    fontSize:32,
  },
  
});
