import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import {
  List,
  Switch,
  Divider,
  useTheme,
  Button,
  Portal,
  Dialog,
  TextInput,
} from 'react-native-paper';

const SettingsScreen = () => {
  const theme = useTheme();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChangePassword = () => {
    // Implement password change logic
    setShowChangePassword(false);
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <ScrollView style={styles.container}>
      <List.Section>
        <Text style={styles.sectionHeader}>Notifications</Text>
        <List.Item
          title="Push Notifications"
          right={() => (
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
              color={theme.colors.primary}
            />
          )}
        />
        <List.Item
          title="Email Notifications"
          right={() => (
            <Switch
              value={emailNotifications}
              onValueChange={setEmailNotifications}
              color={theme.colors.primary}
            />
          )}
        />
      </List.Section>

      <Divider />

      <List.Section>
        <Text style={styles.sectionHeader}>Appearance</Text>
        <List.Item
          title="Dark Mode"
          right={() => (
            <Switch value={darkMode} onValueChange={setDarkMode} color={theme.colors.primary} />
          )}
        />
      </List.Section>

      <Divider />

      <List.Section>
        <Text style={styles.sectionHeader}>Security</Text>
        <List.Item
          title="Change Password"
          onPress={() => setShowChangePassword(true)}
          right={props => <List.Icon {...props} icon="chevron-right" />}
        />
        <List.Item
          title="Two-Factor Authentication"
          onPress={() => {/* Handle 2FA setup */}}
          right={props => <List.Icon {...props} icon="chevron-right" />}
        />
      </List.Section>

      <Divider />

      <List.Section>
        <Text style={styles.sectionHeader}>About</Text>
        <List.Item
          title="Version"
          description="1.0.0"
          right={props => <List.Icon {...props} icon="information" />}
        />
        <List.Item
          title="Terms of Service"
          onPress={() => {/* Show Terms of Service */}}
          right={props => <List.Icon {...props} icon="chevron-right" />}
        />
        <List.Item
          title="Privacy Policy"
          onPress={() => {/* Show Privacy Policy */}}
          right={props => <List.Icon {...props} icon="chevron-right" />}
        />
      </List.Section>

      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          onPress={() => {/* Handle logout */}}
          style={styles.logoutButton}
          buttonColor="#f44336">
          Logout
        </Button>
      </View>

      <Portal>
        <Dialog visible={showChangePassword} onDismiss={() => setShowChangePassword(false)}>
          <Dialog.Title>Change Password</Dialog.Title>
          <Dialog.Content>
            <TextInput
              label="Current Password"
              value={currentPassword}
              onChangeText={setCurrentPassword}
              secureTextEntry
              style={styles.input}
            />
            <TextInput
              label="New Password"
              value={newPassword}
              onChangeText={setNewPassword}
              secureTextEntry
              style={styles.input}
            />
            <TextInput
              label="Confirm New Password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
              style={styles.input}
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setShowChangePassword(false)}>Cancel</Button>
            <Button onPress={handleChangePassword}>Change</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  sectionHeader: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  buttonContainer: {
    padding: 16,
    marginBottom: 32,
  },
  logoutButton: {
    marginTop: 16,
  },
  input: {
    marginBottom: 16,
  },
});

export default SettingsScreen; 