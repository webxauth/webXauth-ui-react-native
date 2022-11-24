import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export function ReactComponent() {
  return (
    <View style={styles.container}>
      <Text>Special Component</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
