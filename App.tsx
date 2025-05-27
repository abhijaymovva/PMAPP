import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import TenantsScreen from './src/screens/TenantsScreen';
import PropertiesScreen from './src/screens/PropertiesScreen';
import RentCollectionScreen from './src/screens/RentCollectionScreen';
import MaintenanceScreen from './src/screens/MaintenanceScreen';
import DocumentsScreen from './src/screens/DocumentsScreen';
import IssuesScreen from './src/screens/IssuesScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Property Manager' }}
        />
        <Stack.Screen name="Tenants" component={TenantsScreen} />
        <Stack.Screen name="Properties" component={PropertiesScreen} />
        <Stack.Screen name="RentCollection" component={RentCollectionScreen} />
        <Stack.Screen name="Maintenance" component={MaintenanceScreen} />
        <Stack.Screen name="Documents" component={DocumentsScreen} />
        <Stack.Screen name="Issues" component={IssuesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
