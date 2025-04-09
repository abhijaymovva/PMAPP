import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { configureStore } from '@reduxjs/toolkit';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Import screens
import PropertiesScreen from './src/screens/properties/PropertiesScreen';
import TenantsScreen from './src/screens/tenants/TenantsScreen';
import MaintenanceScreen from './src/screens/maintenance/MaintenanceScreen';
import DocumentsScreen from './src/screens/documents/DocumentsScreen';
import SettingsScreen from './src/screens/settings/SettingsScreen';

// Create a placeholder reducer until we implement the actual reducers
const rootReducer = {
  // We'll add our reducers here later
};

const store = configureStore({
  reducer: rootReducer,
});

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <SafeAreaProvider>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={{
                tabBarActiveTintColor: '#1e88e5',
                tabBarInactiveTintColor: 'gray',
                headerStyle: {
                  backgroundColor: '#1e88e5',
                },
                headerTintColor: '#fff',
              }}>
              <Tab.Screen
                name="Properties"
                component={PropertiesScreen}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home-group" size={size} color={color} />
                  ),
                }}
              />
              <Tab.Screen
                name="Tenants"
                component={TenantsScreen}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account-group" size={size} color={color} />
                  ),
                }}
              />
              <Tab.Screen
                name="Maintenance"
                component={MaintenanceScreen}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="tools" size={size} color={color} />
                  ),
                }}
              />
              <Tab.Screen
                name="Documents"
                component={DocumentsScreen}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="file-document" size={size} color={color} />
                  ),
                }}
              />
              <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="cog" size={size} color={color} />
                  ),
                }}
              />
            </Tab.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </PaperProvider>
    </StoreProvider>
  );
};

export default App; 