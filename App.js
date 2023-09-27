import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { Environment, Inquiry } from "react-native-persona";

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        title="Start Inquiry"
        onPress={() => {
          Inquiry.fromTemplate("itmpl_DxG7ZJLsui8d8NrgnC1peHyK")
            .environment(Environment.SANDBOX)
            .onComplete((inquiryId, status, fields) =>
              Alert.alert(
                "Complete",
                `Inquiry ${inquiryId} completed with status "${status}."`
              )
            )
            .onCanceled((inquiryId, sessionToken) =>
              Alert.alert("Canceled", `Inquiry ${inquiryId} was cancelled`)
            )
            .onError((error) => Alert.alert("Error", error.message))
            .build()
            .start();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
