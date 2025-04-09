import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { FAB, Card, Title, Paragraph, useTheme, Searchbar, Avatar } from 'react-native-paper';
import { Tenant } from '../../types/tenant';

// Temporary mock data
const mockTenants: Tenant[] = [
  {
    id: '1',
    name: 'John Doe',
    unit: '101',
    property: 'Sunset Apartments',
    rentAmount: 1500,
    leaseEndDate: '2024-12-31',
    contactNumber: '+1 (555) 123-4567',
    email: 'john.doe@email.com',
  },
  {
    id: '2',
    name: 'Jane Smith',
    unit: '205',
    property: 'Ocean View Complex',
    rentAmount: 2000,
    leaseEndDate: '2024-10-15',
    contactNumber: '+1 (555) 987-6543',
    email: 'jane.smith@email.com',
  },
];

const TenantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [tenants, setTenants] = useState<Tenant[]>(mockTenants);
  const theme = useTheme();

  const onChangeSearch = (query: string) => {
    setSearchQuery(query);
    // Filter tenants based on search query
    const filteredTenants = mockTenants.filter(
      tenant =>
        tenant.name.toLowerCase().includes(query.toLowerCase()) ||
        tenant.unit.toLowerCase().includes(query.toLowerCase()) ||
        tenant.property.toLowerCase().includes(query.toLowerCase())
    );
    setTenants(filteredTenants);
  };

  const renderTenant = ({ item }: { item: Tenant }) => (
    <Card style={styles.card}>
      <Card.Content>
        <View style={styles.headerContainer}>
          <Avatar.Text size={48} label={item.name.split(' ').map(n => n[0]).join('')} />
          <View style={styles.headerText}>
            <Title>{item.name}</Title>
            <Paragraph>{item.property} - Unit {item.unit}</Paragraph>
          </View>
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.detailRow}>
            <Paragraph>Rent: ${item.rentAmount}</Paragraph>
            <Paragraph>Lease Ends: {item.leaseEndDate}</Paragraph>
          </View>
          <View style={styles.detailRow}>
            <Paragraph>{item.contactNumber}</Paragraph>
            <Paragraph>{item.email}</Paragraph>
          </View>
        </View>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search tenants"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchbar}
      />
      <FlatList
        data={tenants}
        renderItem={renderTenant}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
      <FAB
        style={[styles.fab, { backgroundColor: theme.colors.primary }]}
        icon="plus"
        onPress={() => {
          // Handle add tenant
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
    alignItems: 'center',
    marginBottom: 16,
  },
  headerText: {
    marginLeft: 16,
    flex: 1,
  },
  detailsContainer: {
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingTop: 16,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default TenantsScreen; 