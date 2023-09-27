import {
  Alert,
  Button,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

const countries = ["Sri Lanka", "India"];

export function SignUp() {

  const [getImageUri, setImageUri] = useState(require("./assets/chat.png"));

  const ui = (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />

      <Image style={styles.image1} source={getImageUri} />

      <Button
        title="Select Profile Picture"
        onPress={async () => {
          const result = await ImagePicker.launchImageLibraryAsync();

          if (!result.canceled) {
            setImageUri(
                {
                    uri: result.assets[0].uri,
                }
            );
          } else {
            Alert.alert("Message", "You did not select any image");
          }
        }}
      />

      <View style={styles.view1}>
        <Text style={styles.text1}>First Name</Text>
        <TextInput style={styles.textInput1} autoCorrect={false} />
      </View>

      <View style={styles.view1}>
        <Text style={styles.text1}>Last Name</Text>
        <TextInput style={styles.textInput1} autoCorrect={false} />
      </View>

      <View style={styles.view1}>
        <Text style={styles.text1}>Mobile</Text>
        <TextInput style={styles.textInput1} autoCorrect={false} />
      </View>

      <View style={styles.view1}>
        <Text style={styles.text1}>Password</Text>
        <TextInput
          style={styles.textInput1}
          secureTextEntry={true}
          autoCorrect={false}
        />
      </View>

      <View style={styles.view1}>
        <Text style={styles.text1}>Country</Text>
        <SelectDropdown
          data={countries}
          buttonStyle={{
            borderRadius: 5,
            borderColor: 1,
            borderColor: "black",
            borderWidth: 1,
            height: 40,
            marginTop: 5,
            width: "100%",
            backgroundColor: "transparent",
          }}
          defaultButtonText="Select Country"
          dropdownStyle={{
            backgroundColor: "transparent",
          }}
          rowStyle={{
            borderRadius: 5,
            width: "100%",
            backgroundColor: "white",
            height: 30,
            borderColor: 1,
            borderColor: "black",
            borderWidth: 1,
          }}
        />
      </View>

      <View style={styles.view1}>
        <Button title="Sign Up" />
        <Button title="Go To Sign In" color={"red"} />
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
  image1: {
    width: 90,
    height: 90,
  },
  view1: {
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  text1: {
    fontSize: 16,
    fontWeight: "bold",
  },
  textInput1: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
    marginTop: 5,
    fontSize: 20,
    padding: 8,
    width: "100%",
    borderRadius: 5,
  },
  image1: {
    width: 90,
    height: 90,
  },
});
