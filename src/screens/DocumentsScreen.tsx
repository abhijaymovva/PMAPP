import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DocumentsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Documents</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
});

export default DocumentsScreen; 