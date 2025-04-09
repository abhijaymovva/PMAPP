import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { FAB, Card, Title, Paragraph, useTheme, Searchbar, Chip } from 'react-native-paper';
import { MaintenanceRequest } from '../../types/maintenance';

// Temporary mock data
const mockMaintenanceRequests: MaintenanceRequest[] = [
  {
    id: '1',
    title: 'Leaking Faucet',
    description: 'Kitchen sink faucet is leaking continuously',
    property: 'Sunset Apartments',
    unit: '101',
    tenant: 'John Doe',
    priority: 'High',
    status: 'Open',
    dateSubmitted: '2024-03-27',
    assignedTo: 'Mike the Plumber',
  },
  {
    id: '2',
    title: 'AC Not Working',
    description: 'Air conditioning unit is not cooling properly',
    property: 'Ocean View Complex',
    unit: '205',
    tenant: 'Jane Smith',
    priority: 'Medium',
    status: 'In Progress',
    dateSubmitted: '2024-03-26',
    assignedTo: 'Cool Air Services',
  },
];

const MaintenanceScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [requests, setRequests] = useState<MaintenanceRequest[]>(mockMaintenanceRequests);
  const theme = useTheme();

  const onChangeSearch = (query: string) => {
    setSearchQuery(query);
    // Filter maintenance requests based on search query
    const filteredRequests = mockMaintenanceRequests.filter(
      request =>
        request.title.toLowerCase().includes(query.toLowerCase()) ||
        request.description.toLowerCase().includes(query.toLowerCase()) ||
        request.property.toLowerCase().includes(query.toLowerCase()) ||
        request.tenant.toLowerCase().includes(query.toLowerCase())
    );
    setRequests(filteredRequests);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case 'high':
        return '#f44336';
      case 'medium':
        return '#ff9800';
      case 'low':
        return '#4caf50';
      default:
        return '#757575';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'open':
        return '#f44336';
      case 'in progress':
        return '#2196f3';
      case 'completed':
        return '#4caf50';
      default:
        return '#757575';
    }
  };

  const renderRequest = ({ item }: { item: MaintenanceRequest }) => (
    <Card style={styles.card}>
      <Card.Content>
        <View style={styles.headerContainer}>
          <Title>{item.title}</Title>
          <View style={styles.chipContainer}>
            <Chip
              style={[styles.chip, { backgroundColor: getPriorityColor(item.priority) }]}
              textStyle={styles.chipText}>
              {item.priority}
            </Chip>
            <Chip
              style={[styles.chip, { backgroundColor: getStatusColor(item.status) }]}
              textStyle={styles.chipText}>
              {item.status}
            </Chip>
          </View>
        </View>
        <Paragraph>{item.description}</Paragraph>
        <View style={styles.detailsContainer}>
          <Paragraph>Property: {item.property} - Unit {item.unit}</Paragraph>
          <Paragraph>Tenant: {item.tenant}</Paragraph>
          <Paragraph>Assigned to: {item.assignedTo}</Paragraph>
          <Paragraph>Submitted: {item.dateSubmitted}</Paragraph>
        </View>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search maintenance requests"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchbar}
      />
      <FlatList
        data={requests}
        renderItem={renderRequest}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
      <FAB
        style={[styles.fab, { backgroundColor: theme.colors.primary }]}
        icon="plus"
        onPress={() => {
          // Handle add maintenance request
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  searchbar: {
    margin: 16,
    elevation: 4,
  },
  listContainer: {
    padding: 16,
  },
  card: {
    marginBottom: 16,
    elevation: 4,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  chipContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  chip: {
    height: 24,
  },
  chipText: {
    color: 'white',
    fontSize: 12,
  },
  detailsContainer: {
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    marginTop: 16,
    paddingTop: 16,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default MaintenanceScreen; 