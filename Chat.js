import { SafeAreaView, StatusBar, StyleSheet } from "react-native";

export function Chat() {
  const ui = (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
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
});
