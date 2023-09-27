import { Button, Image, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from "react-native";

export function SignIn() {
  const ui = (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />

      <Image style={styles.image1} source={require('./assets/chat.png')}/>

      <View style={styles.view1}>
        <Text style={styles.text1}>Mobile</Text>
        <TextInput style={styles.textInput1} autoCorrect={false}/>
      </View>

      <View style={styles.view1}>
        <Text style={styles.text1}>Password</Text>
        <TextInput style={styles.textInput1} secureTextEntry={true} autoCorrect={false}/>
      </View>

      <View style={styles.view1}>
        <Button title="Sign In"/>
        <Button title="Create New Account" color={"red"}/>
      </View>

    </SafeAreaView>
  );
  return ui;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  image1:{
    width:90,
    height:90,
  },
  view1:{
    width:'100%',
    paddingHorizontal:20,
    paddingVertical:8,
  },
  text1:{
    fontSize:16,
    fontWeight:'bold',
  },
  textInput1:{
    borderStyle:"solid",
    borderWidth:1,
    borderColor:"black",
    marginTop:5,
    fontSize:20,
    padding:8,
    width:'100%',
    borderRadius:5,
  },
});
