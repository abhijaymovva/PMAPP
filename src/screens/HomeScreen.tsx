import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Tenants: undefined;
  Properties: undefined;
  RentCollection: undefined;
  Maintenance: undefined;
  Documents: undefined;
  Issues: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
type ScreenName = keyof Omit<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const buttons: { title: string; screen: ScreenName }[] = [
    { title: 'Tenants', screen: 'Tenants' },
    { title: 'Properties', screen: 'Properties' },
    { title: 'Rent Collection', screen: 'RentCollection' },
    { title: 'Maintenance', screen: 'Maintenance' },
    { title: 'Documents', screen: 'Documents' },
    { title: 'Issues', screen: 'Issues' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to Property Manager</Text>
      <View style={styles.grid}>
        {buttons.map((button, index) => (
          <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={() => navigation.navigate(button.screen)}
          >
            <Text style={styles.buttonText}>{button.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const { width } = Dimensions.get('window');
const buttonWidth = (width - 60) / 3; // 3 columns with 20px padding on each side

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 20,
    justifyContent: 'space-between',
  },
  button: {
    width: buttonWidth,
    height: buttonWidth * 0.8,
    backgroundColor: '#007AFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default HomeScreen; 